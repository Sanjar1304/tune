import { FormControl } from '@angular/forms';

export type FormValue<T> = {
    [K in keyof T]?: T[K] extends FormControl<infer U> ? U : never;
};

export type FunctionType = (value?: string | number) => void;

export type JwtOptions = {
    tokenGetter: () => string;
};

export type ResponseState = 'error' | 'success';

export type BaseSize = 'small' | 'middle' | 'large';
