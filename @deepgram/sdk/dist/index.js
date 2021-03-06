"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deepgram = void 0;
var constants_1 = require("./constants");
var keys_1 = require("./keys");
var projects_1 = require("./projects");
var transcription_1 = require("./transcription");
var usage_1 = require("./usage");
var members_1 = require("./members");
var invitation_1 = require("./invitation");
var billing_1 = require("./billing");
var scopes_1 = require("./scopes");
var Deepgram = /** @class */ (function () {
    function Deepgram(apiKey, apiUrl) {
        this._apiKey = apiKey;
        this._apiUrl = apiUrl || constants_1.DefaultOptions.apiUrl;
        this._validateOptions();
        this.keys = new keys_1.Keys(this._apiKey, this._apiUrl);
        this.projects = new projects_1.Projects(this._apiKey, this._apiUrl);
        this.transcription = new transcription_1.Transcriber(this._apiKey, this._apiUrl);
        this.usage = new usage_1.Usage(this._apiKey, this._apiUrl);
        this.members = new members_1.Members(this._apiKey, this._apiUrl);
        this.invitation = new invitation_1.Invitation(this._apiKey, this._apiUrl);
        this.billing = new billing_1.Billing(this._apiKey, this._apiUrl);
        this.scopes = new scopes_1.Scopes(this._apiKey, this._apiUrl);
    }
    /**
     * Ensures that the provided options were provided
     */
    Deepgram.prototype._validateOptions = function () {
        if (!this._apiKey || this._apiKey.trim().length === 0) {
            throw new Error("DG: API key is required");
        }
        if (!this._apiUrl || this._apiUrl.trim().length === 0) {
            throw new Error("DG: API url should be a valid url or not provided");
        }
    };
    return Deepgram;
}());
exports.Deepgram = Deepgram;
//# sourceMappingURL=index.js.map