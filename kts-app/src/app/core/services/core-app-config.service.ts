import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/layout/service/app-config.service';

@Injectable({
    providedIn: 'root',
})
export class CoreAppConfigService {
    public baseUrl: string = 'localhost:3000';
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

    public getBaseUrl(): string {
        return `http://localhost:3000`;
    }
}
