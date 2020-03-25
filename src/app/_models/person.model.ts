import { GroupModel } from './group.model';

export interface PersonModel {
    id?: number;
    name: string;
    groupId: number;
    group: GroupModel;
    createdAt: Date
}