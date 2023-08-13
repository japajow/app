import {extend} from 'vee-validate'
import {required,email} from 'vee-validate/dist/vee-validate.esm'
import {messages as messagePt} from 'vee-validate/dist/vee-validate.esm'

extend('required',{
    ...required,
    message: messagePt.required
})


extend('email',{
    ...email,
    message: messagePt.email
})