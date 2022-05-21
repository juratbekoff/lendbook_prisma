import { PrismaClient, Pupil } from "@prisma/client";

const client = new PrismaClient

// 1) findAll
// 2) create
// 3) delete
// 4) update


async function findAll(): Promise<Pupil[]> {
    return client.pupil.findMany()
}


async function create (pupil: Pupil) : Promise<Pupil> {
    return client.pupil.create({
        data: {
            name: pupil.name,
            surname: pupil.surname,
            group: pupil.group,
            photo: pupil.photo
        }
    })
}

async function remove (incomingId: number) : Promise<Pupil> {
    return client.pupil.delete({
        where: { id: incomingId,} 
    })
}

async function update(incomingId: number, pupil: Pupil) : Promise<Pupil> {
    return client.pupil.update({
        data: {
            name: pupil.name,
            surname: pupil.surname,
            group: pupil.group,
            photo: pupil.photo
        },

        where: {
            id: incomingId
        }
    })  
}

async function removeAll() {
    const deleteUsers = await client.pupil.deleteMany()
}

export default {
    create,
    findAll,
    remove,
    update,
    removeAll
}