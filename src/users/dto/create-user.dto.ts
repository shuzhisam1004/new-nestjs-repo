export class CreateUserDto {
    name: string;
    email: string;
    password: string;
}

export class LoginUserDto {
    email: string;
    password: string;
}

export class ChangePasswordDto {
    email: string;
    current_password: string;
    new_password: string;
}

export class AddParterDto {
    email: string;
    partner_email: string;
}

export class listRequestDto {
    email: string;
}

export class DelPartner {
    email: string;
    partner_email: string;
}