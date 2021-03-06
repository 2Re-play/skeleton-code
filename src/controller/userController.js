const userService = require('../service/userService')
const response = require('../lib/response')
const Joi = require('Joi')

// message, obj, res, status
// 사용자가 최초로 채팅방에 들어올 때 키보드 영역에 표시될 자동 응답 명령어 목록 호출
exports.singUp = async (req, res, next) => {

    const { email } = req.body || 'cadi@gmail.com'
    const { password } = req.body || '1234'

    const validation_data = { email, password }

    // email -> 이메일형식,string  password -> string
    const sheme = {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }

    try {
        // 입력 값의 유효성 확인 (not null, 유효한 형태)
        const email_password_validation = Joi.validate(validation_data, sheme)

        // 유효하지 않은 경우
        if (email_password_validation.error) {
            throw new Error(403)
        }
        const result = await userService.signUp(next)
        response.respondJson("successfully sign up",result, res, 200)
    } catch (e) {
        response.respondOnError(e.message, res, 500)
    }
}
