"use strict";
import User from '../entity/user.entity.js';
import { AppDataSource } from '../config/configDb.js';
import { application } from 'express';
import { userBodyValidation } from '../validations/user.validation.js';
import { createUserService,deleteUserService,getUserService, getUsersService, updateUserService } from '../service/user.service.js';

export async function createUser(req,res){
    try {

        const user = req.body;
        
        const { value,error } = userBodyValidation.validate(user);

        if(error) return res.status(400).json({
            message: error.message
        })

        const userSaved = await createUserService(value)

        if(!userSaved){
            res.status(400).json({
                message:"Error al crear el usuario",
                data: null
            })
        }

        res.status(201).json({
            message:"Usuario creado exitosamente",
            data: userSaved
        })

    } catch (error) {
        console.error("Error al crear un usuario, el error es: ", error)
    }
}

export async function getUser(req,res){
    try {

        const id = req.params.id;

        const  userFound= await getUserService(id);

        if(!userFound){
            res.status(404).json({
                message: "Error al obtener un usuario, ingrese un ID válido.",
                data:null
            })
        }
            res.status(200).json({
                message:"Usuario obtenido correctamente.",
                data: userFound
            })
        
    } catch (error) {
        console.error("Error al obtener usuario, el error es: ", error);
    }

}

export async function getUsers(req,res){
    try {
    
        const users = await getUsersService();
        console.log(req.body);
        if(!users){
            res.status(404).json({
                message:"No se encontraron usuarios",
                data:null
            })
        }

        if(users){
            res.status(200).json({
                message:"Usuarios encontrados.",
                data: users 
            })
        }
        
    } catch (error) {
        console.error("No fue posible encontrar los usuarios, el error es: ",error)
    }
}

export async function updateUser(req,res){
    try {

        const id = req.params.id;
        const user = req.body;

        const { value , error } = userBodyValidation.validate(user);

        if(!value) return res.status(400).json({
            message: error.message && error.details
        })

        const userData = await updateUserService(id,value);
        
        if(!userData){
            res.status(400).json({
                message:"Error al actualizar el usuario",
                data: null,
            })
            return 0;
        }
        res.status(200).json({
            message: "Usuario actualizado. ",
            data: userData
        })
    } catch (error) {
        console.error("Error al editar usuario, el error es: ",error);
    }

}

export async function deleteUser(req,res){
    try {
        const userRepository = AppDataSource.getRepository(User);

        const id = req.params.id;

        const userDeleted = await deleteUserService(id);

        res.status(200).json({
            message:"El usuario fue eliminado correctamente. ",
            data: userDeleted
        })
    
    } catch (error) {
        console.error("Error al eliminar usuario, el error es: ", error);    
    }
}