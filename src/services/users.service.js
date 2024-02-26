import { UserManager } from '../dao/factory.js';
import { userPath } from '../utils.js';
import  UserManagerRepository  from '../repositories/users.repository.js';
const userManager = new UserManager(userPath);
const userManagerRepository= new UserManagerRepository(userManager);

export const getUserCurrent= async (email) => {
    const user = await userManagerRepository.getUserByEmailRepository(email);
    return user;
}

export const getUserById= async (uid) => {
    const user = await userManagerRepository.getUserByIdRepository(uid);
    return user;
}

export const updatePremiumStatus= async (uid,role) => {
    const user = await userManagerRepository.getUserByIdRepository(uid);
    if (role==="premium" & user.documents.length<3){
        return "Documents missing"
    }
    const result = await userManagerRepository.updatePremiumStatusRepository(uid,role);
    return result;
}

export const uploadDocuments= async (uid,userDocs) => {
    const result = await userManagerRepository.uploadDocumentsRepository(uid,userDocs);
    return result;
}
