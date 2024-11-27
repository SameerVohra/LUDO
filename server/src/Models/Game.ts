import mongoose, {Model, Schema, Document} from "mongoose"
interface game extends Document{
    gameId: string,
    gamePass: string,
    joinedUsers: [string],
    username: string,
} 

const game: Schema = new mongoose.Schema({
    gameId: {type: String},
    gamePass: {type: String},
    joinedUsers: [{type: String}],
    username: {type: String},
})

const gameModel: Model<game> = mongoose.model<game>("gameModel", game);
export default gameModel;
