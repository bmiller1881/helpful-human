import mongoose from 'mongoose';
declare const Colors: mongoose.Model<{
    ColorHex: string;
    ColorRGB: string;
    ShadesHex: string[];
    ShadesRGB: string[];
    TintsHex: string[];
    TintsRGB: string[];
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    ColorHex: string;
    ColorRGB: string;
    ShadesHex: string[];
    ShadesRGB: string[];
    TintsHex: string[];
    TintsRGB: string[];
}> & Omit<{
    ColorHex: string;
    ColorRGB: string;
    ShadesHex: string[];
    ShadesRGB: string[];
    TintsHex: string[];
    TintsRGB: string[];
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    ColorHex: string;
    ColorRGB: string;
    ShadesHex: string[];
    ShadesRGB: string[];
    TintsHex: string[];
    TintsRGB: string[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    ColorHex: string;
    ColorRGB: string;
    ShadesHex: string[];
    ShadesRGB: string[];
    TintsHex: string[];
    TintsRGB: string[];
}>> & Omit<mongoose.FlatRecord<{
    ColorHex: string;
    ColorRGB: string;
    ShadesHex: string[];
    ShadesRGB: string[];
    TintsHex: string[];
    TintsRGB: string[];
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default Colors;
