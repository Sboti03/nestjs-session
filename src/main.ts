import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as filestore from 'session-file-store'


const FileStore = filestore(session)

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  /*
     Here it's assumed that public and views are in the root directory,
     alongside with src. You can put them wherever you want, 
     just use the correct path if you use another folder.
  */
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');


  app.use(session({
    store: new FileStore,
    secret: 'keyboard cat'
}));

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );


  await app.listen(3000);
}
bootstrap();
