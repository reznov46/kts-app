import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/layout/service/app-config.service';

@Injectable({
    providedIn: 'root',
})
export class CoreAppConfigService {
    constructor(private appConfigService: AppConfigService) {}

    public loadConfig() {
        return new Promise((resolve, reject) => {
            const styleString = localStorage.getItem('styleConfig');
            if (styleString === null) {
                resolve(true);
            }
            const styleConfig = JSON.parse(styleString!);
            this.appConfigService.changeTheme(
                styleConfig.theme,
                styleConfig.colorScheme
            );
            resolve(true);
        });
    }
}
