'use server'

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose"
import Tag from "@/database/tag.model";


export async function createQuestion(params: any) {
    // eslint-disable-next-line
    try {
        connectToDatabase();

        const { title, content, tags, author, path } = params;

        // Create a new question
        const question = await Question.create({
            title,
            content,
            author
        });

        const tagDocuments = [];

        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate({ name: { $regex: new RegExp(`^${tag}$`, "i") } },
                { $setOnInsert: { name: tag }, $push: { questions: question._id } },
                { upsert: true, new: true }
            )
            tagDocuments.push(existingTag._id);
        }
        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: { $each: tagDocuments } }
        });

        // Create an interaction reord for the user's ask_question action

        // Icrement author's reputaoion by +5 for asking a question
    }
    catch (error) {
        // handle error
    }
}