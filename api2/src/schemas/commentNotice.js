const Joi = require('joi');
const { CommentNotice} = require('../db');

const postCommentnoticeSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    date:Joi.date().required(),
    status:Joi.string(),
    userId:Joi.number().required(),
    noticeId:Joi.number().required()
});
module.exports ={postCommentnoticeSchema}