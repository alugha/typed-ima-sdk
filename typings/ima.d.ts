declare namespace google {
  namespace ima {
    /**
     * An ad class that's extended by classes representing different ad types.
     */
    interface Ad {
      getAdId(): string;
      getAdPodInfo(): AdPodInfo;
      getAdSystem(): string;
      getAdvertiserName(): string;
      getApiFramework(): string;
      getCompanionAds(
        adSlotWidth: number,
        adSlotHeight: number,
        settings?: CompanionAdSelectionSettings,
      ): CompanionAd[];
      getContentType(): string;
      getCreativeAdId(): string;
      getCreativeId(): string;
      getDealId(): string;
      getDescription(): string;
      getDuration(): number;
      getHeight(): number;
      getMediaUrl(): string;
      getMinSuggestedDuration(): number;
      getSkipTimeOffset(): number;
      getSurveyUrl(): string;
      getTitle(): string;
      getTraffickingParameters(): any;
      getTraffickingParametersString(): string;
      getUiElements(): string[];
      getUniversalAdIdRegistry(): string;
      getUniversalAdIdValue(): string;
      getVastMediaHeight(): number;
      getVastMediaWidth(): number;
      getWidth(): number;
      getWrapperAdIds(): string[];
      getWrapperAdSystems(): string[];
      getWrapperCreativeIds(): string[];
      isLinear(): boolean;
    }

    /**
     * This class represents a container for displaying ads. The SDK will automatically create structures inside the containerElement parameter to house video and overlay ads.
     *
     * When an instance of this class is created, it creates an IFRAME in the containerElement and loads the SDK core. This IFRAME must be preserved in order for the SDK to function properly. Once all ads have been played and the SDK is no longer needed, use the destroy() method to unload the SDK.
     *
     * The containerElement parameter must be an element that is part of the DOM. It is necessary to correctly position the containerElement in order for the ads to be displayed correctly. It is recommended to position it above the content video player and size it to cover the whole video player. Please refer to the SDK documentation for details about recommended implementations.
     */
    class AdDisplayContainer {
      /**
       *
       * @param containerElement The element to display the ads in. The element must be inserted into the DOM before creating ima.AdDisplayContainer.
       * @param videoElement Specifies the alternative video ad playback element. We recommend always passing in your content video player. Refer to Custom Ad Playback for more information.
       * @param clickTrackingElement Specifies the alternative video ad click element. Leave this null to let the SDK handle clicks. Even if supplied, the SDK will only use the custom click tracking element when non-AdSense/AdX creatives are displayed in environments that do not support UI elements overlaying a video player (e.g. iPhone or pre-4.0 Android). The custom click tracking element should never be rendered over the video player because it can intercept clicks to UI elements that the SDK renders. Also note that the SDK will not modify the visibility of the custom click tracking element. This means that if a custom click tracking element is supplied, it must be properly displayed when the linear ad is played. You can check ima.AdsManager.isCustomClickTrackingUsed when the google.ima.AdEvent.Type.STARTED event is fired to determine whether or not to display your custom click tracking element. If appropriate for your UI, you should hide the click tracking element when the google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED event fires.
       */
      constructor(
        containerElement: HTMLElement,
        videoElement?: HTMLVideoElement,
        clickTrackingElement?: HTMLElement,
      );
      /**
       * Destroys internal state and previously created DOM elements. The IMA SDK will be unloaded and no further calls to any APIs should be made.
       */
      public destroy(): void;
      /**
       * Initializes the video playback. On mobile platforms, including iOS and Android browsers, first interaction with video playback is only allowed within a user action (a click or tap) to prevent unexpected bandwidth costs. Call this method as a direct result of a user action before starting the ad playback. This method has no effect on desktop platforms and when custom video playback is used.
       */
      public initialize(): void;
    }

    /**
     * AdError surfaces information to the user about whether a failure occurred during ad loading or playing. The errorType accessor provides information about whether the error occurred during ad loading or ad playing.
     */
    class AdError {
      /**
       * Constructs the ad error based on the error data.
       * @param data The ad error message data.
       * @returns The constructed ad error object.
       */
      public static deserialize(data: any): AdError;
      /**
       * @returns The error code, as defined in google.ima.AdError.ErrorCode.
       */
      public getErrorCode(): AdError.ErrorCode;
      /**
       * Returns the Error that caused this one.
       * @returns Inner error that occurred during processing, or null if this information is unavailable. This error may either be a native error or an google.ima.AdError, a subclass of a native error. This may return null if the error that caused this one is not available.
       */
      public getInnerError(): Error;
      /**
       * @returns The message for this error.
       */
      public getMessage(): string;
      /**
       * @returns The type of this error, as defined in google.ima.AdError.Type.
       */
      public getType(): string;
      /**
       * @returns If VAST error code is available, returns it, otherwise returns ima.AdError.ErrorCode.UNKNOWN_ERROR.
       */
      public getVastErrorCode(): number;
      /**
       * Serializes an ad to JSON-friendly object for channel transmission.
       * @returns The transmittable ad error.
       */
      public serialize(): any;
      public toString(): string;
    }

    namespace AdError {
      /**
       * The possible error codes raised while loading or playing ads.
       */
      enum ErrorCode {
        /**
         * There was a problem requesting ads from the server. VAST error code 1012
         */
        ADS_REQUEST_NETWORK_ERROR,
        /**
         * There was an error with asset fallback. VAST error code 1021
         */
        ASSET_FALLBACK_FAILED,
        /**
         * The browser prevented playback initiated without user interaction. VAST error code 1205
         */
        AUTOPLAY_DISALLOWED,
        /**
         * A companion ad failed to load or render. VAST error code 603
         */
        COMPANION_AD_LOADING_FAILED,
        /**
         * Unable to display one or more required companions. The master ad is discarded since the required companions could not be displayed. VAST error code 602
         */
        COMPANION_REQUIRED_ERROR,
        /**
         * There was a problem requesting ads from the server. VAST error code 1005
         */
        FAILED_TO_REQUEST_ADS,
        /**
         * The ad tag url specified was invalid. It needs to be properly encoded. VAST error code 1013
         */
        INVALID_AD_TAG,
        /**
         * An invalid AdX extension was found. VAST error code 1105
         */
        INVALID_ADX_EXTENSION,
        /**
         * Invalid arguments were provided to SDK methods. VAST error code 1101
         */
        INVALID_ARGUMENTS,
        /**
         * Unable to display NonLinear ad because creative dimensions do not align with creative display area (i.e. creative dimension too large). VAST error code 501
         */
        NONLINEAR_DIMENSIONS_ERROR,
        /**
         * An overlay ad failed to load. VAST error code 502
         */
        OVERLAY_AD_LOADING_FAILED,
        /**
         * An overlay ad failed to render. VAST error code 500
         */
        OVERLAY_AD_PLAYING_FAILED,
        /**
         * There was an error with stream initialization during server side ad insertion. VAST error code 1020
         */
        STREAM_INITIALIZATION_FAILED,
        /**
         * The ad response was not understood and cannot be parsed. VAST error code 1010
         */
        UNKNOWN_AD_RESPONSE,
        /**
         * An unexpected error occurred and the cause is not known. Refer to the inner error for more information. VAST error code 900
         */
        UNKNOWN_ERROR,
        /**
         * Locale specified for the SDK is not supported. VAST error code 1011
         */
        UNSUPPORTED_LOCALE,
        /**
         * No assets were found in the VAST ad response. VAST error code 1007
         */
        VAST_ASSET_NOT_FOUND,
        /**
         * Empty VAST response. VAST error code 1009
         */
        VAST_EMPTY_RESPONSE,
        /**
         * Assets were found in the VAST ad response for linear ad, but none of them matched the video player's capabilities. VAST error code 403
         */
        VAST_LINEAR_ASSET_MISMATCH,
        /**
         * The VAST URI provided, or a VAST URI provided in a subsequent wrapper element, was either unavailable or reached a timeout, as defined by the video player. The timeout is 5 seconds for initial VAST requests and each subsequent wrapper. VAST error code 301
         */
        VAST_LOAD_TIMEOUT,
        /**
         * The ad response was not recognized as a valid VAST ad. VAST error code 100
         */
        VAST_MALFORMED_RESPONSE,
        /**
         * Failed to load media assets from a VAST response. The default timeout for media loading is 8 seconds. VAST error code 402
         */
        VAST_MEDIA_LOAD_TIMEOUT,
        /**
         * No Ads VAST response after one or more wrappers. VAST error code 303
         */
        VAST_NO_ADS_AFTER_WRAPPER,
        /**
         * Assets were found in the VAST ad response for nonlinear ad, but none of them matched the video player's capabilities. VAST error code 503
         */
        VAST_NONLINEAR_ASSET_MISMATCH,
        /**
         * Problem displaying MediaFile. Currently used if video playback is stopped due to poor playback quality. VAST error code 405
         */
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE,
        /**
         * VAST schema validation error. VAST error code 101
         */
        VAST_SCHEMA_VALIDATION_ERROR,
        /**
         * The maximum number of VAST wrapper redirects has been reached. VAST error code 302
         */
        VAST_TOO_MANY_REDIRECTS,
        /**
         * Trafficking error. Video player received an ad type that it was not expecting and/or cannot display. VAST error code 200
         */
        VAST_TRAFFICKING_ERROR,
        /**
         * VAST duration is different from the actual media file duration. VAST error code 202
         */
        VAST_UNEXPECTED_DURATION_ERROR,
        /**
         * Ad linearity is different from what the video player is expecting. VAST error code 201
         */
        VAST_UNEXPECTED_LINEARITY,
        /**
         * The ad response contained an unsupported VAST version. VAST error code 102
         */
        VAST_UNSUPPORTED_VERSION,
        /**
         * General VAST wrapper error. VAST error code 300
         */
        VAST_WRAPPER_ERROR,
        /**
         * There was an error playing the video ad. VAST error code 400
         */
        VIDEO_PLAY_ERROR,
        /**
         * A VPAID error occurred. Refer to the inner error for more information. VAST error code 901
         */
        VPAID_ERROR,
      }

      /**
       * The possible error types for ad loading and playing.
       */
      enum Type {
        /**
         * Indicates that the error was encountered when the ad was being loaded. Possible causes: there was no response from the ad server, malformed ad response was returned, or ad request parameters failed to pass validation.
         */
        AD_LOAD,
        /**
         * Indicates that the error was encountered after the ad loaded, during ad play. Possible causes: ad assets could not be loaded, etc.
         */
        AD_PLAY,
      }
    }

    /**
     * This event is raised when an error occurs when loading an ad from the Google or DoubleClick servers. The types on which you can register for the event are AdsLoader and AdsManager.
     */
    class AdErrorEvent {
      /**
       * @returns The AdError that caused this event.
       */
      public getError(): AdError;
      /**
       * During ads load request it is possible to provide an object that is available once the ads load is complete or fails. One possible use case: relate ads response to a specific request and use user request content object as the key for identifying the response. If an error occurred during ads load, you can find out which request caused this failure.
       * @returns Object that was provided during ads request.
       */
      public getUserRequestContext(): any;
    }

    namespace AdErrorEvent {
      /**
       * Types of AdErrorEvents
       */
      enum Type {
        /**
         * Fired when an error occurred while the ad was loading or playing.
         */
        AD_ERROR,
      }
    }

    /**
     * This event type is raised by the ad as a notification when the ad state changes and when users interact with the ad. For example, when the ad starts playing, is clicked on, etc. You can register for the various state changed events on AdsManager.
     */
    class AdEvent {
      /**
       * Get the current ad that is playing or just played.
       * @returns The ad associated with the event, or null if there is no relevant ad.
       */
      public getAd(): Ad | null;
      /**
       * Allows extra data to be passed from the ad.
       * @returns Extra data for the event. Log events raised for error carry object of type 'google.ima.AdError' which can be accessed using 'adError' key.
       */
      public getAdData(): any;
    }

    namespace AdEvent {
      /**
       * Types of AdEvents
       */
      enum Type {
        AD_BREAK_READY,
        AD_METADATA,
        ALL_ADS_COMPLETED,
        CLICK,
        COMPLETE,
        CONTENT_PAUSE_REQUESTED,
        CONTENT_RESUME_REQUESTED,
        DURATION_CHANGE,
        FIRST_QUARTILE,
        IMPRESSION,
        INTERACTION,
        LINEAR_CHANGED,
        LOADED,
        LOG,
        MIDPOINT,
        PAUSED,
        RESUMED,
        SKIPPABLE_STATE_CHANGED,
        SKIPPED,
        STARTED,
        THIRD_QUARTILE,
        USER_CLOSE,
        VOLUME_CHANGED,
        VOLUME_MUTED,
      }
    }

    /**
     * An ad may be part of a pod of ads. This object exposes metadata related to that pod, such as the number of ads in the pod and ad position within the pod.
     *
     * The getTotalAds API contained within this object is often correct, but in certain scenarios, it represents the SDK's best guess. See that method's documentation for more information.
     */
    interface AdPodInfo {
      /**
       * Returns the position of the ad.
       * @returns The position of the ad within the pod. The value returned is one-based, i.e. 1 of 2, 2 of 2, etc.
       */
      getAdPosition(): number;
      /**
       * Returns true if the ad is a bumper ad. Bumper ads are short linear ads that can indicate to a user when the user is entering into or exiting from an ad break.
       * @returns Whether the ad is a bumper ad.
       */
      getIsBumper(): boolean;
      /**
       * The maximum duration of the pod in seconds. For unknown duration, -1 is returned.
       * @returns The maximum duration of the ads in this pod in seconds.
       */
      getMaxDuration(): number;
      /**
       * Returns the index of the ad pod.
       *
       * For preroll pod, 0 is returned. For midrolls, 1, 2, ... N is returned. For postroll, -1 is returned.
       *
       * For pods in VOD streams with dynamically inserted ads, 0...N is returned regardless of whether the ad is a pre-, mid-, or post-roll.
       *
       * Defaults to 0 if this ad is not part of a pod, or the pod is not part of an ad playlist.
       *
       * @returns The index of the pod in the ad playlist.
       */
      getPodIndex(): number;
      /**
       * Returns the content time offset at which the current ad pod was scheduled. For pods in VOD streams with dynamically inserted ads, stream time is returned.
       *
       * For preroll pod, 0 is returned. For midrolls, the scheduled time is returned. For postroll, -1 is returned.
       *
       * Defaults to 0 if this ad is not part of a pod, or the pod is not part of an ad playlist.
       *
       * @returns The time offset for the current ad pod.
       */
      getTimeOffset(): number;
      getTotalAds(): number;
    }

    class AdsLoader {
      constructor(container: AdDisplayContainer);
      public contentComplete(): void;
      public destroy(): void;
      public getSettings(): ImaSdkSettings;
      public requestAds(adsRequest: AdsRequest, userRequestContext?: any): void;
    }

    interface AdsManager {
      collapse(): void;
      destroy(): void;
      discardAdBreak(): void;
      expand(): void;
      getAdSkippableState(): boolean;
      getCuePoints(): number[];
      getRemainingTime(): number;
      getVolume(): number;
      init(
        width: number,
        height: number,
        viewMode: ViewMode,
        videoElement?: HTMLVideoElement,
      ): void;
      isCustomClickTrackingUsed(): boolean;
      isCustomPlaybackUsed(): boolean;
      pause(): void;
      resize(width: number, height: number, viewMode: ViewMode): void;
      resume(): void;
      setVolume(volume: number): void;
      skip(): void;
      start(): void;
      stop(): void;
      updateAdsRenderingSettings(
        adsRenderingSettings: AdsRenderingSettings,
      ): void;
    }

    class AdsManagerLoadedEvent {
      public getAdsManager(
        contentPlayback: any,
        adsRenderingSettings: AdsRenderingSettings,
      ): AdsManager;
      public getUserRequestContext(): any;
    }

    namespace AdsManagerLoadedEvent {
      enum Type {
        ADS_MANAGER_LOADED,
      }
    }

    class AdsRenderingSettings {
      public autoAlign: boolean;
      public bitrate: number;
      public enablePreloading: boolean;
      public loadVideoTimeout: number;
      public mimeTypes: string[];
      public playAdsAfterTime: number;
      public restoreCustomPlaybackStateOnAdBreakComplete: boolean;
      public uiElements: UiElements[];
      public useStyledLinearAds: boolean;
      public useStyledNonLinearAds: boolean;
    }

    class AdsRequest {
      public adsResponse?: string;
      public adTagUrl: string;
      public contentDuration?: number;
      public contentKeywords?: string[];
      public contentTitle?: string;
      public forceNonLinearFullSlot?: boolean;
      public linearAdSlotHeight: number;
      public linearAdSlotWidth: number;
      public liveStreamPrefetchSeconds?: number;
      public nonLinearAdSlotHeight: number;
      public nonLinearAdSlotWidth: number;
      public vastLoadTimeout?: number;

      public setAdWillAutoPlay(autoPlay: boolean): void;
      public setAdWillPlayMuted(muted: boolean): void;
    }

    interface CompanionAd {
      getAdSlotId(): string;
      getContent(): string;
      getContentType(): string;
      getHeight(): number;
      getWidth(): number;
    }

    class CompanionAdSelectionSettings {
      public adSlotIds: string[];
      public creativeType: CompanionAdSelectionSettings.CreativeType;
      public nearMatchParent: number;
      public resourceType: CompanionAdSelectionSettings.ResourceType;
      public sizeCriteria: CompanionAdSelectionSettings.SizeCriteria;
    }

    namespace CompanionAdSelectionSettings {
      enum CreativeType {
        ALL,
        FLASH,
        IMAGE,
      }

      enum ResourceType {
        ALL,
        HTML,
        IFRAME,
        STATIC,
      }

      enum SizeCriteria {
        IGNORE,
        SELECT_EXACT_MATCH,
        SELECT_NEAR_MATCH,
      }
    }

    class ImaSdkSettings {
      public getCompanionBackfill(): ImaSdkSettings.CompanionBackfillMode;
      public getDisableCustomPlaybackForIOS10Plus(): boolean;
      public getDisableFlashAds(): boolean;
      public getLocale(): string;
      public getNumRedirects(): number;
      public getPlayerType(): string;
      public getPlayerVersion(): string;
      public getPpid(): string;
      public setAutoPlayAdBreaks(autoPlayAdBreaks: boolean): void;
      public setCompanionBackfill(
        mode: ImaSdkSettings.CompanionBackfillMode,
      ): void;
      public setDisableCustomPlaybackForIOS10Plus(disable: boolean): void;
      public setDisableFlashAds(disableFlashAds: boolean): void;
      public setLocale(locale: string): void;
      public setNumRedirects(numRedirects: number): void;
      public setPlayerType(playerType: string): void;
      public setPlayerVersion(playerVersion: string): void;
      public setPpid(ppid: string): void;
      public setVpaidAllowed(allowVpaid: boolean): void;
      public setVpaidMode(vpaidMode: ImaSdkSettings.VpaidMode): void;
    }

    namespace ImaSdkSettings {
      enum CompanionBackfillMode {
        ALWAYS,
        ON_MASTER_AD,
      }

      enum VpaidMode {
        DISABLED,
        ENABLED,
        INSECURE,
      }
    }

    enum UiElements {
      AD_ATTRIBUTION,
      COUNTDOWN,
    }

    enum ViewMode {
      FULLSCREEN,
      NORMAL,
    }

    const VERSION: string;
  }
}
