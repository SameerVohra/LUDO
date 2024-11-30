import mongoose, {Model, Schema, Document} from "mongoose"
interface game extends Document{
    username: string,
    gameId: string,
    gamePass: string,
} 

const game: Schema = new mongoose.Schema({
    username: {type: String},
    gameId: {type: String},
    gamePass: {type: String},
})

const gameModel: Model<game> = mongoose.model<game>("gameModel", game);
export default gameModel;
