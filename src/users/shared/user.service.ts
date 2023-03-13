import { Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async getAll() {
        return await this.userModel.find().exec();
    }

    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async getAvatarById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async create(task: User) {
        const createdTask = new this.userModel(task);
        return await createdTask.save();
    }

    async update(id: string, task: User) {
        await this.userModel.updateOne({ _id: id }, task).exec()
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.userModel.deleteOne({ _id: id }).exec();
    }
}