"use client";
import { useEffect } from "react";

// 🔹 Extend the global Window type properly
declare global {
	interface Window {
		OneSignalDeferred?: Array<(OneSignal: any) => Promise<void>>; 
	}
}

export default function OneSignalInit() {
	useEffect(() => {
		// Create the script dynamically
		const script = document.createElement("script");
		script.src =
			"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
		script.defer = true;

		document.head.appendChild(script);

		script.onload = () => {
			// Ensure OneSignalDeferred is always an array before using push
			if (!Array.isArray(window.OneSignalDeferred)) {
				window.OneSignalDeferred = [];
			}

			window.OneSignalDeferred.push(async (OneSignal) => {
				await OneSignal.init({
					appId: "e90d0d60-4228-4523-9e40-287d3c3a4f53",
					safari_web_id:
						"web.onesignal.auto.3cda868c-95ba-4dc0-a9c6-5ad5b099bc53",
					notifyButton: {
						enable: true,
					},
				});
			});
		};
	}, []);

	return null;
}
