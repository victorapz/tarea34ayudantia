"use strict";
import { EntitySchema } from "typeorm";

const UserSchema = new EntitySchema({
    name: "User",
    tableName: "Users",
    columns: {
        id:{
            type: "int",
            primary: true,
            generated: true
        },
        nombreCompleto:{
            type:"varchar",
            length: 255,
            nullable: false
        },
        rut:{
            type:"varchar",
            lenght:12,
            nullable: false,
            unique:true
        },
        email:{
            type: "varchar",
            lenght: 255,
            nullable: false,
            unique: true,
        },
        telefono: {
            type: "varchar",
            lenght: 15,
            nullable: false,
            unique: true
        },
        createdAt:{
            type:"timestamp with time zone",
            default: () => "CURRENT_TIMESTAMP",
            nullable: false
        },
        updateAt:{
            type:"timestamp with time zone",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
            nullable: false,
        }
    }
})

export default UserSchema;