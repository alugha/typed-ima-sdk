export declare namespace ima {
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

  class AdDisplayContainer {
    constructor(
      containerElement: HTMLElement,
      videoElement?: HTMLVideoElement,
      clickTrackingElement?: HTMLElement,
    );
    public destroy(): void;
    public initialize(): void;
  }

  class AdError {
    public static deserialize(data: any): AdError;
    public getErrorCode(): AdError.ErrorCode;
    public getInnerError(): Error;
    public getMessage(): string;
    public getType(): string;
    public getVastErrorCode(): number;
    public serialize(): any;
    public toString(): string;
  }

  namespace AdError {
    enum ErrorCode {
      ADS_REQUEST_NETWORK_ERROR,
      ASSET_FALLBACK_FAILED,
      AUTOPLAY_DISALLOWED,
      COMPANION_AD_LOADING_FAILED,
      COMPANION_REQUIRED_ERROR,
      FAILED_TO_REQUEST_ADS,
      INVALID_AD_TAG,
      INVALID_ADX_EXTENSION,
      INVALID_ARGUMENTS,
      NONLINEAR_DIMENSIONS_ERROR,
      OVERLAY_AD_LOADING_FAILED,
      OVERLAY_AD_PLAYING_FAILED,
      STREAM_INITIALIZATION_FAILED,
      UNKNOWN_AD_RESPONSE,
      UNKNOWN_ERROR,
      UNSUPPORTED_LOCALE,
      VAST_ASSET_NOT_FOUND,
      VAST_EMPTY_RESPONSE,
      VAST_LINEAR_ASSET_MISMATCH,
      VAST_LOAD_TIMEOUT,
      VAST_MALFORMED_RESPONSE,
      VAST_MEDIA_LOAD_TIMEOUT,
      VAST_NO_ADS_AFTER_WRAPPER,
      VAST_NONLINEAR_ASSET_MISMATCH,
      VAST_PROBLEM_DISPLAYING_MEDIA_FILE,
      VAST_SCHEMA_VALIDATION_ERROR,
      VAST_TOO_MANY_REDIRECTS,
      VAST_TRAFFICKING_ERROR,
      VAST_UNEXPECTED_DURATION_ERROR,
      VAST_UNEXPECTED_LINEARITY,
      VAST_UNSUPPORTED_VERSION,
      VIDEO_PLAY_ERROR,
      VPAID_ERROR,
    }

    enum Type {
      AD_LOAD,
      AD_PLAY,
    }
  }

  class AdErrorEvent {
    public getError(): AdError;
    public getUserRequestContext(): any;
  }

  namespace AdErrorEvent {
    enum Type {
      AD_ERROR,
    }
  }

  class AdEvent {
    public getAd(): Ad;
    public getAdData(): any;
  }

  namespace AdEvent {
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

  interface AdPodInfo {
    getAdPosition(): number;
    getIsBumper(): boolean;
    getMaxDuration(): number;
    getPodIndex(): number;
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

export type ImaSdk = typeof ima;
