import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from 'angular-6-social-login';


export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("968010074702-m26te1bg5lpvqq802d5vh8231f7aisrq.apps.googleusercontent.com")
          },
        ]
    );
    return config;
  }