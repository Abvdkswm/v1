"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const util_1=require("util"),common=(0,util_1.deprecate)((()=>{}),"Common is now deprecated, just access the properties directly");function parseImageUrl(e,t,i){if(!e||""===e.trim()||t.is_deleted)return null;if(e.startsWith("/data")&&(e=`https://danbooru.donmai.us${e}`),e.startsWith("/cached")&&(e=`https://danbooru.donmai.us${e}`),e.startsWith("/_images")&&(e=`https://dollbooru.org${e}`),e.startsWith("//derpicdn.net")&&(e=`https:${t.image}`),!t.file_url&&void 0!==t.directory){const r=t.directory??`${t.hash.substr(0,2)}/${t.hash.substr(2,2)}`;e=`//${i.domain}/images/${r}/${t.image}`}return e.startsWith("http")||(e=`https:${e}`),encodeURI(e)}function getTags(e){let t=[];return Array.isArray(e.tags)?e.tags:(t=e.tags&&e.tags.general?Object.values(e.tags).reduce(((e,t)=>e.concat(t)),[]):e.tags?e.tags.split(" "):e.tag_string.split(" ").map((e=>e.replace(/,/g,"").replace(/ /g,"_"))),t.filter((e=>""!==e)))}class Post{booru;fileUrl;height;width;sampleUrl;sampleHeight;sampleWidth;previewUrl;previewHeight;previewWidth;id;available;tags;score;source;rating;createdAt;data;constructor(e,t){this.data=e,this.booru=t;const i=e.is_deleted||e.is_banned;this.fileUrl=parseImageUrl(e.file_url||e.image||(i?e.source:void 0)||e.file&&e.file.url||e.representations&&e.representations.full,e,t),this.available=!i&&null!==this.fileUrl,this.height=parseInt(e.height||e.image_height||e.file&&e.file.height,10),this.width=parseInt(e.width||e.image_width||e.file&&e.file.width,10),this.sampleUrl=parseImageUrl(e.sample_url||e.large_file_url||e.representations&&e.representations.large||e.sample&&e.sample.url,e,t),this.sampleHeight=parseInt(e.sample_height||e.sample&&e.sample.height,10),this.sampleWidth=parseInt(e.sample_width||e.sample&&e.sample.width,10),this.previewUrl=parseImageUrl(e.preview_url||e.preview_file_url||e.representations&&e.representations.small||e.preview&&e.preview.url,e,t),this.previewHeight=parseInt(e.preview_height||e.preview&&e.preview.height,10),this.previewWidth=parseInt(e.preview_width||e.preview&&e.preview.width,10),this.id=e.id?e.id.toString():"No ID available",this.tags=getTags(e),e.score&&e.score.total?this.score=e.score.total:this.score=e.score?parseInt(e.score,10):e.score,this.source=e.source||e.sources||e.source_url,this.rating=e.rating||/(safe|suggestive|questionable|explicit)/i.exec(e.tags)||"u",Array.isArray(this.rating)&&(this.rating=this.rating[0]),"suggestive"===this.rating&&(this.rating="q"),this.rating=this.rating.charAt(0),this.createdAt=null,"object"==typeof e.created_at?this.createdAt=new Date(1e3*e.created_at.s+e.created_at.n/1e9):"number"==typeof e.created_at?this.createdAt=new Date(1e3*e.created_at):"number"==typeof e.change?this.createdAt=new Date(1e3*e.change):this.createdAt=new Date(e.created_at||e.date)}get file_url(){return this.fileUrl}get sample_url(){return this.sampleUrl}get sample_height(){return this.sampleHeight}get sample_width(){return this.sampleWidth}get preview_url(){return this.previewUrl}get preview_height(){return this.previewHeight}get preview_width(){return this.previewWidth}get postView(){return this.booru.postView(this.id)}get common(){return common(),this}}exports.default=Post;