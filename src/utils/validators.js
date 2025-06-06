import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `"name" is required`,
  }),
  email: Joi.string().email().required().messages({
    "string.empty": `"email" is required`,
    "string.email": `"email" must be a valid email`,
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": `"password" is required`,
    "string.min": `"password" should have a minimum length of {#limit}`,
  }),
  role: Joi.string().valid("user", "admin").optional(),
});

export const studentSchema = Joi.object({
  name: Joi.string().required(),
  class: Joi.string().required(),
  number: Joi.number().required(),
  userId: Joi.string().optional(),
});

export const essaySchema = Joi.object({
  title: Joi.string().max(500).optional().allow(""),
  theme: Joi.string().max(500).required(),
  content: Joi.string().max(7000).required(),
  feedback: Joi.string().optional().allow(""),
  correctedAt: Joi.date().iso().allow(null),
  studentId: Joi.string().required(),
});

export const gradeSchema = Joi.object({
  overallScore: Joi.number().min(0).max(1000).required(),
  criteria: Joi.object({
    argumentation: Joi.number().min(0).max(200).default(0),
    coherence: Joi.number().min(0).max(200).default(0),
    grammar: Joi.number().min(0).max(200).default(0),
    structure: Joi.number().min(0).max(200).default(0),
  }).required(),
  essayId: Joi.string().required(),
});
