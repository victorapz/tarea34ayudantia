"use strict"

import User from '../entity/user.entity.js'
import { AppDataSource } from '../config/configDb.js'

export async function createUserService(dataUser){ 
    try {

        const userRepository = AppDataSource.getRepository(User)
        
        const newUser = userRepository.create({
            nombreCompleto: dataUser.nombreCompleto,
            rut: dataUser.rut,
            email: dataUser.email,
            telefono: dataUser.telefono
        })
        const userSaved = await userRepository.save(newUser)
        
        return userSaved;

    } catch (error) {
        console.error("Error al crear usuario, el error es:", error)
    }
}
export async function getUserService(id){
    try {
        const userRepository = AppDataSource.getRepository(User); 

        const userFound =  await userRepository.findOne({
            where: {id : id}
        })
        
        return userFound;
    } catch (error) {
        console.error("Error al encontrar usuario, el error es: ",error);
    }
}
export async function getUsersService(){
try {
    const userRepository =  AppDataSource.getRepository(User);


    const users = await userRepository.find();

    return users;

    
} catch (error) {
    console.error("Error al encontrar usuarios, el error es: ",error);
}

}
export async function updateUserService(id,user){
try {
    const userRepository = AppDataSource.getRepository(User);
    
    const userFound = await userRepository.findOne({
        where: [{
            id:id
        }]
    })
    
    if(!userFound){
        console.error("Error al encontrar el usuario, el error es",error)
        return 0;
    }

    const {userData,error} = await userRepository.update(id,user);
        
    await userRepository.findOne({
        where: [{
            id:id
        }]
    })
    return userData;
    

} catch (error) {
    console.error("Error al editar usuario, el error es: ",error);
}
}
export async function deleteUserService(id){
    try {

        const userRepository = AppDataSource.getRepository(User);

        const userFound = userRepository.findOne({
            where: [{
                id : id
            }]
        })
        if(!userFound){
            res.status(404).json({
                message: "Usuario no encontrado",
                data: null
            })
        }
        const userDeleted = await userRepository.delete(id);

        return userDeleted;

    } catch (error) {
        console.error("Error al eliminar usuario, el error es: ",error);
    }
}