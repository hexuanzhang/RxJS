import { Injectable } from '@angular/core';
import { Observable } from 'Rxjs';

@Injectable()
export class WebsocketService {
	
	webstocket: any = new Map();
	
	/**
	 * http://caniuse.com/#feat=websockets
	 *
	 * 兼容方案：interval + HTTP
	 */
	constructor() {}
	
	connect(url: string) {
		return this.webstocket.has(url) ? this.webstocket.get(url) : this.init(url);
	}
	
	disconnect(url: string) {
		if (this.webstocket.has(url)) {
			let ws = this.webstocket.get(url);
			
			ws.unsubscribe();
			return this.webstocket.remove(url);
		}
		
		return true;
	}
	
	private init(url) {
		this.webstocket.set(url, Observable.webSocket(url));
		
		return this.webstocket.get(url);
	}
}