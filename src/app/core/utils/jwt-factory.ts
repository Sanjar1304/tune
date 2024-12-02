
import { StorageService } from '../../shared/services/storage.service';
import { JwtOptions } from '../typings';

export function jwtOptionsFactory(
    storageService: StorageService
): JwtOptions {
    return {
        tokenGetter: (): string => storageService.accessToken || '',
    };
}
