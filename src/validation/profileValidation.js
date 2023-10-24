import {check} from "express-validator";
import {transValidation} from "./../../lang/Eng"
 
let updateInfo =[
    check("username",transValidation.update_username)
        .optional()
        .isLength({min:3, max: 50})
        .matches(/^[\s0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/),
    check("gender", transValidation.update_gender)
        .optional()
        .isIn(["male", "female"]),
    check("address_1",transValidation.update_address)
        .optional()
        .isLength({min: 3, max: 100}),
    check("address_2",transValidation.update_address)
        .optional()
        .isLength({min: 3, max: 100}),    
    check("city",transValidation.update_city)
        .optional()
        .isLength({min:3, max: 100}),
    check("state",transValidation.update_state)
        .optional()
        .isLength({min:2, max: 2}),
    check("zipCode",transValidation.update_zipCode)
        .optional()
        .isLength({min:5, max: 9}),
    check("phone",transValidation.update_phone)
        .optional()
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
];

module.exports = {
    updateInfo: updateInfo
};