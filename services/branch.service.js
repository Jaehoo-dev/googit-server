const Branch = require('../models/Branch');

class BranchService {
  async createBranch(user_id) {
    try {
      return await Branch.create({
        created_by: user_id,
        notes: [],
        shared_users_info: [],
      });
    } catch (err) {
      throw err;
    }
  }

  async getBranchByMongooseIdAndUpdate(id, branch) {
    try {
      await Branch.findByIdAndUpdate(
        id,
        branch,
        { new: true },
      );
    } catch (err) {
      throw err;
    }
  }
}

module.exports = BranchService;
