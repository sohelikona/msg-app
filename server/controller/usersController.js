const User = require('../model/userModel');
const bcrypt = require('bcrypt')

module.exports.register = async (req, res, next) => {
try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });

    if (usernameCheck) {
        return res.json({ msg: "Username already taken", status: false });
    } else {
        const emailCheck = await User.findOne({ email });
        if (emailCheck) {
            return res.json({ msg: "Email already exists", status: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });
        delete user.password;
        return res.json({ status: true, user });
    }
    
} catch (ex) {
    next(ex)
}

};




// module.exports.login = async (req, res, next) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });
    
//         if (!user) 
//             return res.json({ msg: "Incorrect Username or password", status: false });

//             const isPasswordValid = await bcrypt.compare(password, user.password);
//             if (!isPasswordValid)
//             if (emailCheck) {
//                 return res.json({ msg: "Email already exists", status: false });
//             }
//             const hashedPassword = await bcrypt.hash(password, 10);
//             const user = await User.create({
//                 email,
//                 username,
//                 password: hashedPassword,
//             });
//             delete user.password;
//             return res.json({ status: true, user });
//         }
        
//     } catch (ex) {
//         next(ex)
//     }
    
//     };


module.exports.login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      console.log('Username:', username); // Add this
      console.log('Password:', password); // Add this
      const user = await User.findOne({ username });
      console.log('User:', user); 
      if (!user)
        return res.json({ msg: "Incorrect Username or Password", status: false });
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid)
        return res.json({ msg: "Incorrect Username or Password", status: false });
        console.log('Is Password Valid:', isPasswordValid);
      delete user.password;
      return res.json({ status: true, user });
    } catch (ex) {
      console.error(ex);
      next(ex);
    }
  };



  
module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    console.log('User ID:', userId);
    console.log('Avatar Image:', avatarImage);
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({ isSet: userData.isAvatarImageSet, image: userData.avatarImage })
  } catch (ex) {
    next(ex)
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id:{ $ne: req.params.id }}).select([
      "email",
      "username",
      "avatarImage",
      "_id",
      // "image",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex)
  }
}


module.exports.logout = (req, res, next) => {
  try {
    if (!req.params.id) return res.json({ msg: "User id is required " });
    // onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
};