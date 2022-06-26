const Joi = require('joi');
const {
  DONE,
  PENDING,
  COD,
  PAYPAL,
  CONFIRMED,
  CANCELED,
} = require('../../configs/constants');
const catchValidateError = require('../../helpers/catch_validate_error');
const getPage = require('../../helpers/get_page');
const _ = require('lodash');
class DTO {
  createOrder(data) {
    const { payment_type, user, address, score, sale, order_code } = data || {};

    const schema = Joi.object({
      payment_type: Joi.string().valid(COD, PAYPAL).required(),
      user: Joi.string().alphanum().required(),
      score: Joi.number(),
      sale: Joi.number(),
      address: Joi.object({
        province: Joi.object({
          name: Joi.string().required(),
          code: Joi.number().required(),
        }),
        district: Joi.object({
          name: Joi.string().required(),
          code: Joi.number().required(),
        }),
        ward: Joi.object({
          name: Joi.string().required(),
          code: Joi.string().required(),
        }),
        street: Joi.string(),
      }).required(),
      order_code: Joi.string(),
    });

    const { error } = schema.validate({
      payment_type,
      user,
      address,
      score,
      sale,
      order_code
    });

    catchValidateError(error);

    return {
      payment_type,
      user,
      address,
      sale,
      score,
      order_code
    };
  }

  updateOrder(_id, newData) {
    const { order_status, payment_type, order_code } = newData || {};

    const schema = Joi.object({
      payment_type: Joi.string().valid(COD, PAYPAL),
      order_status: Joi.string().valid(PENDING, DONE, CONFIRMED),
      order_code: Joi.string(),
    });

    const { error } = schema.validate({
      order_status,
      payment_type,
      order_code
    });

    catchValidateError(error);

    return {
      order_status,
      payment_type,
      order_code
    };
  }

  cancelOrder(data) {
    const { _id } = data || {};

    const schema = Joi.object({
      _id: Joi.string().alphanum().min(1),
    });

    const { error } = schema.validate({
      _id,
    });

    catchValidateError(error);

    return { _id };
  }

  removeOrder(_id) {
    const schema = Joi.object({
      _id: Joi.string().alphanum().required(),
    });

    const { error } = schema.validate({
      _id,
    });

    catchValidateError(error);

    return _id;
  }

  queryOrders(params) {
    const { order_status, payment_type, page, user } = params || {};

    const schema = Joi.object({
      payment_type: Joi.string().valid(COD, PAYPAL),
      order_status: Joi.string().valid(PENDING, DONE, CONFIRMED, CANCELED),
      page: Joi.number().min(1),
      user: Joi.string().alphanum(),
    });

    const { error } = schema.validate({
      order_status,
      payment_type,
      page,
      user,
    });

    catchValidateError(error);

    const { start, limit } = getPage(page || 0);
    delete params['page'];

    return {
      params,
      conditions: {
        start,
        limit,
        page,
      },
    };
  }

  queryUserOrdersList(params) {
    const { user } = params || {};

    const schema = Joi.object({
      user: Joi.string().alphanum().required(),
    });

    const { error } = schema.validate({
      user,
    });

    catchValidateError(error);

    return {
      user,
    };
  }

  getOneOrder(_id) {
    const schema = Joi.object({
      _id: Joi.string().alphanum().min(1),
    });

    // const { error } = schema.validate({
    //   brand,
    // });

    // catchValidateError(error);

    return _id;
  }
}

module.exports = new DTO();
