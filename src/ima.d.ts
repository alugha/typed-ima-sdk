declare namespace google {
    module ima {
        interface Ad {
            getAdId(): string;
            getAdPodInfo(): AdPodInfo;
            getAdSystem(): string;
            getAdvertiserName(): string;
            getApiFramework(): string;
            getCompanionAds(adSlowWidth: number, adSlowHeight: number, settings?: CompanionAdSelectionSettings): CompanionAd[];
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
            constructor(containerElement: HTMLElement, videoElement?: HTMLVideoElement, clickTrackingElement?: HTMLElement);
            destroy(): void;
            initialize(): void;
        }

        class AdError {
            static deserialize(data: any): AdError;
            getErrorCode(): AdError.ErrorCode;
            getInnerError(): Error;
            getMessage(): string;
            getType(): string;
            getVastErrorCode(): number;
            serialize(): any;
            toString(): string;
        }

        module AdError {
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
                VPAID_ERROR
            }

            enum Type {
                AD_LOAD,
                AD_PLAY
            }
        }

        class AdErrorEvent {
            getError(): AdError;
            getUserRequestContext(): any;
        }

        module AdErrorEvent {
            enum Type {
                AD_ERROR
            }
        }

        class AdEvent {
            getAd(): Ad;
            getAdData(): any;
        }

        module AdEvent {
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
                VOLUME_MUTED
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
            contentComplete(): void;
            destroy(): void;
            getSettings(): ImaSdkSettings;
            requestAds(adsRequest: AdsRequest, userRequestContext?: any): void;
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
            init(width: number, height: number, viewMode: ViewMode, videoElement?: HTMLVideoElement): void;
            isCustomClickTrackingUsed(): boolean;
            isCustomPlaybackUsed(): boolean;
            pause(): void;
            resize(width: number, height: number, viewMode: ViewMode): void;
            resume(): void;
            setVolume(volume: number): void;
            skip(): void;
            start(): void;
            stop(): void;
            updateAdsRenderingSettings(adsRenderingSettings: AdsRenderingSettings): void;
        }
        
        class AdsManagerLoadedEvent {
            getAdsManager(contentPlayback: any, adsRenderingSettings: AdsRenderingSettings): AdsManager;
            getUserRequestContext(): any;
        }

        module AdsManagerLoadedEvent {
            enum Type {
                ADS_MANAGER_LOADED
            }
        }

        class AdsRenderingSettings {
            autoAlign: boolean;
            bitrate: number;
            enablePreloading: boolean;
            loadVideoTimeout: number;
            mimeTypes: string[];
            playAdsAfterTime: number;
            restoreCustomPlaybackStateOnAdBreakComplete: boolean;
            uiElements: UiElements[];
            useStyledLinearAds: boolean;
            useStyledNonLinearAds: boolean;
        }

        class AdsRequest {
            adsResponse?: string;
            adTagUrl: string;
            contentDuration?: number;
            contentKeywords?: string[];
            contentTitle?: string;
            forceNonLinearFullSlot?: boolean;
            linearAdSlotHeight: number;
            linearAdSlotWidth: number;
            liveStreamPrefetchSeconds?: number;
            nonLinearAdSlotHeight: number;
            nonLinearAdSlotWidth: number;
            vastLoadTimeout?: number;

            setAdWillAutoPlay(autoPlay: boolean): void;
            setAdWillPlayMuted(muted: boolean): void;
        }

        interface CompanionAd {
            getAdSlotId(): string;
            getContent(): string;
            getContentType(): string;
            getHeight(): number;
            getWidth(): number;
        }

        class CompanionAdSelectionSettings {
            adSlotIds: string[];
            creativeType: CompanionAdSelectionSettings.CreativeType;
            nearMatchParent: number;
            resourceType: CompanionAdSelectionSettings.ResourceType;
            sizeCriteria: CompanionAdSelectionSettings.SizeCriteria;
        }

        module CompanionAdSelectionSettings {
            enum CreativeType {
                ALL,
                FLASH,
                IMAGE
            }

            enum ResourceType {
                ALL,
                HTML,
                IFRAME,
                STATIC
            }

            enum SizeCriteria {
                IGNORE,
                SELECT_EXACT_MATCH,
                SELECT_NEAR_MATCH
            }
        }

        class ImaSdkSettings {
            getCompanionBackfill(): ImaSdkSettings.CompanionBackfillMode;
            getDisableCustomPlaybackForIOS10Plus(): boolean;
            getDisableFlashAds(): boolean;
            getLocale(): string;
            getNumRedirects(): number;
            getPlayerType(): string;
            getPlayerVersion(): string;
            getPpid(): string;
            setAutoPlayAdBreaks(autoPlayAdBreaks: boolean): void;
            setCompanionBackfill(mode: ImaSdkSettings.CompanionBackfillMode): void;
            setDisableCustomPlaybackForIOS10Plus(disable: boolean): void;
            setDisableFlashAds(disableFlashAds: boolean): void;
            setLocale(locale: string): void;
            setNumRedirects(numRedirects: number): void;
            setPlayerType(playerType: string): void;
            setPlayerVersion(playerVersion: string): void;
            setPpid(ppid: string): void;
            setVpaidAllowed(allowVpaid: boolean): void;
            setVpaidMode(vpaidMode: ImaSdkSettings.VpaidMode): void;
        }

        module ImaSdkSettings {
            enum CompanionBackfillMode {
                ALWAYS,
                ON_MASTER_AD
            }

            enum VpaidMode {
                DISABLED,
                ENABLED,
                INSECURE
            }
        }

        enum UiElements {
            AD_ATTRIBUTION,
            COUNTDOWN
        }

        enum ViewMode {
            FULLSCREEN,
            NORMAL
        }

        const VERSION: string;
    }
}
