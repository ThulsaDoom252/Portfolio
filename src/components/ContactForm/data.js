export const defaultFormValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

export const requiredField = 'Required'
export const emailFormat = 'Not email format!'
export const shortMessage = 'Message must be at least 10 characters long'
export const emailValidator = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;