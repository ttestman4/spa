set -x
# rimraf foo
# mkdir foo
# cd foo
# yarn add @angular/cli
# node_modules/.bin/ng -- set defaults.component.changeDetection OnPush
# node_modules/.bin/ng -- set defaults.component.viewEncapsulation None
# cd ..
# rimraf spa
# git clone https://github.com/ttestman4/spa.git
# cd spa
# git checkout -b develop
# cd ..
# foo/node_modules/.bin/ng new spa -v --routing --style scss --skip-install --view-encapsulation None
# cd spa
# yarn
# yarn add concurrently --dev
# yarn add lite-server --dev
# yarn add @ngrx/store
# yarn add @ngrx/store-devtools
# yarn add @ngrx/effects
# yarn add @ngrx/entity
# yarn add ngrx-store-freeze
# yarn add @ngrx/schematics --dev
# npm run ng -- set defaults.schematics.collection=@ngrx/schematics
# npm run ng -- set defaults.component.changeDetection OnPush
# npm run ng -- set defaults.component.viewEncapsulation None
npm run ng -- g module nonFunctional -m app.module
npm run ng -- g module non-functional/rootState -m non-functional/non-functional.module
npm run ng -- g store root --root --module non-functional/root-state -d --state-path non-functional/root-state 
# npm run ng -- g module non-functional/services -m non-functional/non-functional.module
# npm run ng -- g module non-functional/services/logger -m non-functional/services/services.module
# npm run ng -- g service non-functional/services/logger/logger -m non-functional/services/logger/logger.module
# npm run ng -- g module non-functional/services/exceptionHandler -m non-functional/services/services.module
# npm run ng -- g service non-functional/services/exception-handler/exceptionHandler -m non-functional/services/exception-handler/exception-handler.module
# npm run ng -- g module non-functional/services/httpIntercepter -m non-functional/services/services.module
# npm run ng -- g service non-functional/services/http-intercepter/httpErrorIntercepter -m non-functional/services/http-intercepter/http-intercepter.module
# npm run ng -- g service non-functional/services/http-intercepter/xsrfIntercepter -m non-functional/services/http-intercepter/http-intercepter.module
# npm run ng -- g module non-functional/widgets -m non-functional/non-functional.module
# npm run ng -- g module non-functional/widgets/progress -m non-functional/widgets/widgets.module
# npm run ng -- g component non-functional/widgets/progress -m non-functional/widgets/progress/progress.module
# npm run ng -- g module non-functional/widgets/notification -m non-functional/widgets/widgets.module
# npm run ng -- g component non-functional/widgets/notification -m non-functional/widgets/notification/notification.module


