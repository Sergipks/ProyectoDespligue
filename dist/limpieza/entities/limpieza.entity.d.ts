/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from 'mongoose';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';
export declare class Limpieza extends Document {
    habitacion: Habitacion | Types.ObjectId;
    fecha: Date;
    observaciones: string;
}
export declare const LimpiezaSchema: import("mongoose").Schema<Limpieza, import("mongoose").Model<Limpieza, any, any, any, Document<unknown, any, Limpieza> & Limpieza & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Limpieza, Document<unknown, {}, import("mongoose").FlatRecord<Limpieza>> & import("mongoose").FlatRecord<Limpieza> & {
    _id: Types.ObjectId;
}>;
