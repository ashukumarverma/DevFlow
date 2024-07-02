'use server'

import { connectToDatabase } from "../mongoose"


export async function createQuestion(params: any) {
    // eslint-disable-next-line
    try {
        connectToDatabase();
    }
    catch (error) {
        // handle error
    }
}