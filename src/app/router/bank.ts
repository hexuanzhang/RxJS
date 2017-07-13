// import {NgModule} from '@angular/core';
// import {RouterModule, PreloadAllModules} from '@angular/router';
// /**
//  * Created by zhx on 17/7/3.
//  */
// const routers = [
// 	{
// 		path: 'conversations/:folder',
// 		children: [
// 			{
// 				path: '',
// 				component: null
// 			},
// 			{
// 				path: ':id',
// 				component: null
// 			}
// 		]
// 	}
// ];
//
// // enable preloading
// @NgModule ({
// 	bootstrap: [null],
// 	providers: [],
// 	imports: [RouterModule.forRoot(routers, {
// 		preloadingStrategy: PreloadAllModules
// 		preloadingStrategy: CustomP
// 	})]
// })
// const preload_routers = [
// 	{
// 		path: 'moduleA',
// 		loadChildren: null,
// 		data: {
// 			preload: true
// 		}
// 	}
// ]