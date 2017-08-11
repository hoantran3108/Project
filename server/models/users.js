import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstname: {
    type: String,
    max: 30,
    require: true
  },
  lastname: {
    type: String,
    max: 30,
    require: true
  },
  username: {
    type: String,
    lowercase: true,
    min: 6,
    max: 30,
    require: true,
    unique: true
  },
  email: {
    type: String,
    lowercase: true,
    require: true,
    unique: true
  },
  telephone: {
    type: Number,
    min: 9,
    max: 12
  },
  address: {
    type: String,
    max: 200
  },
  password: {
    type: String,
    min: 6,
    max: 100,
    require: true
  }
}, { timestamps: { createdAt: 'created_at' }})

userSchema.pre('save', function(next) {
  const user = this

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function(canidatePassword, next) {
  bcrypt.compare(canidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return next(err)
    }
    next(null, isMatch)
  })
}

export default mongoose.model('User', userSchema)
