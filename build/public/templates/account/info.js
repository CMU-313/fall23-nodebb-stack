
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"account\">\n    " + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n    " + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n<div data-widget-area=\"header\">\n    " + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n\n<div class=\"cover\" component=\"account/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null) ? context['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null) ? context['cover:position'] : null)) + 
      ";\">\n    <div class=\"avatar-wrapper\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n        " + 
      (guard((context != null) ? context['picture'] : null) ?
        "\n        <img src=\"" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          "\" class=\"avatar avatar-xl avatar-rounded\" />\n        " :
        "\n        <div class=\"avatar avatar-xl avatar-rounded\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          ";\" title=\"" + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\n        ") + 
      "\n        <i component=\"user/status\" class=\"fa fa-circle status " + 
      __escape(guard((context != null) ? context['status'] : null)) + 
      "\" title=\"[[global:" + 
      __escape(guard((context != null) ? context['status'] : null)) + 
      "]]\"></i>\n\n        " + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n        " + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n        <button class=\"btn-morph persona-fab " + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "heart" :
                "plus") + 
              "\" title=\"" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "[[global:unfollow]]" :
                "[[global:follow]]") + 
              "\">\n            <span>\n                <span class=\"s1\"></span>\n                <span class=\"s2\"></span>\n                <span class=\"s3\"></span>\n            </span>\n        </button>\n        ") + 
          "\n        " :
        "") + 
      "\n    </div>\n\n    <div class=\"container\">\n        <div class=\"btn-group account-fab bottom-sheet\">\n    <button type=\"button\" class=\"persona-fab dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fa fa-ellipsis-v\"></i>\n    </button>\n    <ul class=\"dropdown-menu dropdown-menu-right\">\n        " + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n        " + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n        " + 
              (guard((context != null) ? context['banned'] : null) ?
                "" :
                "\n        " + 
                  (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
                    "" :
                    "\n        <li class=\"" + 
                      (guard((context != null) ? context['hasPrivateChat'] : null) ?
                        "" :
                        "hidden") + 
                      "\">\n            <a component=\"account/chat\" href=\"#\">[[user:chat_with, " + 
                      __escape(guard((context != null) ? context['username'] : null)) + 
                      "]]</a>\n        </li>\n        <li>\n            <a component=\"account/new-chat\" href=\"#\">[[user:new_chat_with, " + 
                      __escape(guard((context != null) ? context['username'] : null)) + 
                      "]]</a>\n        </li>\n        ") + 
                  "\n        <li>\n            <a component=\"account/flag\" href=\"#\">[[user:flag-profile]]</a>\n        </li>\n        <li>\n            <a component=\"account/block\" href=\"#\">" + 
                  (guard((context != null) ? context['isBlocked'] : null) ?
                    "[[user:unblock_user]]" :
                    "[[user:block_user]]") + 
                  "</a>\n        </li>\n        <li role=\"separator\" class=\"divider\"></li>\n        ") + 
              "\n        ") + 
          "\n        " :
        "") + 
      "\n        <li>\n            <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"inline-block\" id=\"profile\">[[user:profile]]</a>\n        </li>\n        " + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\">[[user:edit]]</a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\">[[user:settings]]</a></li>\n        " :
        "") + 
      "\n\n        " + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n        " + 
          ((guard((context != null) ? context['canBan'] : null) || guard((context != null) ? context['canMute'] : null)) ?
            "\n        <li role=\"separator\" class=\"divider\"></li>\n        <li class=\"dropdown-header\">[[user:admin_actions_label]]</li>\n        " :
            "") + 
          "\n        " + 
          (guard((context != null) ? context['canBan'] : null) ?
            "\n        <li class=\"" + 
              (guard((context != null) ? context['banned'] : null) ?
                "hide" :
                "") + 
              "\">\n            <a component=\"account/ban\" href=\"#\">[[user:ban_account]]</a>\n        </li>\n        <li class=\"" + 
              (guard((context != null) ? context['banned'] : null) ?
                "" :
                "hide") + 
              "\">\n            <a component=\"account/unban\" href=\"#\">[[user:unban_account]]</a>\n        </li>\n        " :
            "") + 
          "\n        " + 
          (guard((context != null) ? context['canMute'] : null) ?
            "\n        <li class=\"" + 
              (guard((context != null) ? context['muted'] : null) ?
                "hide" :
                "") + 
              "\">\n            <a component=\"account/mute\" href=\"#\">[[user:mute_account]]</a>\n        </li>\n        <li class=\"" + 
              (guard((context != null) ? context['muted'] : null) ?
                "" :
                "hide") + 
              "\">\n            <a component=\"account/unmute\" href=\"#\">[[user:unmute_account]]</a>\n        </li>\n        " :
            "") + 
          "\n        " + 
          (guard((context != null) ? context['isAdmin'] : null) ?
            "\n        <li>\n            <a component=\"account/delete-account\" href=\"#\" class=\"\">[[user:delete_account_as_admin]]</a>\n            <a component=\"account/delete-content\" href=\"#\" class=\"\">[[user:delete_content]]</a>\n            <a component=\"account/delete-all\" href=\"#\" class=\"\">[[user:delete_all]]</a>\n        </li>\n        " :
            "") + 
          "\n        ") + 
      "\n\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\">[[user:following]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "</span></a></li>\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\">[[user:followers]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "</span></a></li>\n        " + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\">[[user:blocks]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)) + 
          "</span></a></li>\n        " :
        "") + 
      "\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\">[[global:topics]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)) + 
      "</span></a></li>\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\">[[global:posts]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "</span></a></li>\n        " + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/best\">[[global:best]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['best'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['best'] : null)) + 
          "</span></a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/controversial\">[[global:controversial]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['controversial'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['controversial'] : null)) + 
          "</span></a></li>\n        ") + 
      "\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\">[[global:header.groups]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)) + 
      "</span></a></li>\n\n        " + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/categories\">[[user:watched_categories]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "</span></a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/bookmarks\">[[user:bookmarks]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['bookmarks'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['bookmarks'] : null)) + 
          "</span></a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/watched\">[[user:watched]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['watched'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['watched'] : null)) + 
          "</span></a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/ignored\">[[user:ignored]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['ignored'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['ignored'] : null)) + 
          "</span></a></li>\n        " + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n        <li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/upvoted\">[[global:upvoted]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['upvoted'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['upvoted'] : null)) + 
              "</span></a></li>\n        " + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\n        <li><a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null) ? context['userslug'] : null)) + 
                  "/downvoted\">[[global:downvoted]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
                  __escape(guard((context != null && context['counts'] != null) ? context['counts']['downvoted'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['counts'] != null) ? context['counts']['downvoted'] : null)) + 
                  "</span></a></li>\n        ") + 
              "\n        ") + 
          "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/uploads\">[[global:uploads]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)) + 
          "</span></a></li>\n        " :
        "") + 
      "\n\n        " + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n    </ul>\n</div>\n\n\n        " + 
      (guard((context != null) ? context['allowCoverPicture'] : null) ?
        "\n        " + 
          (guard((context != null) ? context['canEdit'] : null) ?
            "\n        <div class=\"controls\">\n            <span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\n            <span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows\"></i></span>\n            <span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\n        </div>\n        <div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n        <div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n        " :
            "") + 
          "\n        " :
        "") + 
      "\n    </div>\n</div>\n\n\n    " + 
      (guard((context != null && context['sessions'] != null) ? context['sessions']['length'] : null) ?
        "\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-md-12\">\n            <h4>[[global:sessions]]</h4>\n            <ul class=\"list-group\" component=\"user/sessions\">\n                " + 
          compiled.blocks['sessions'](helpers, context, guard, iter, helper) + 
          "\n            </ul>\n        </div>\n    </div>\n    " :
        "") + 
      "\n\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">[[global:recentips]]</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <ul>\n                        " + 
      compiled.blocks['ips'](helpers, context, guard, iter, helper) + 
      "\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">[[user:info.username-history]]</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <ul class=\"list-group\">\n                        " + 
      compiled.blocks['usernames'](helpers, context, guard, iter, helper) + 
      "\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">[[user:info.email-history]]</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <ul class=\"list-group\">\n                        " + 
      compiled.blocks['emails'](helpers, context, guard, iter, helper) + 
      "\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">[[user:info.latest-flags]]</h3>\n                </div>\n                <div class=\"panel-body\">\n                    " + 
      (guard((context != null && context['history'] != null && context['history']['flags'] != null) ? context['history']['flags']['length'] : null) ?
        "\n                    <ul class=\"recent-flags\">\n                        " + 
          compiled.blocks['history.flags'](helpers, context, guard, iter, helper) + 
          "\n                    </ul>\n                    " :
        "\n                    <div class=\"alert alert-success\">[[user:info.no-flags]]</div>\n                    ") + 
      "\n                </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">\n\n                        [[user:info.ban-history]]\n\n                        " + 
      (guard((context != null) ? context['banned'] : null) ?
        "\n                        " + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n                        <button class=\"btn btn-xs pull-right btn-success\" component=\"account/unban\">[[user:unban_account]]</button>\n                        ") + 
          "\n                        " :
        "\n                        " + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n                        <button class=\"btn btn-xs pull-right btn-danger\" component=\"account/ban\">[[user:ban_account]]</button>\n                        ") + 
          "\n                        ") + 
      "\n                    </h3>\n                </div>\n                <div class=\"panel-body\">\n                    " + 
      (guard((context != null && context['history'] != null && context['history']['bans'] != null) ? context['history']['bans']['length'] : null) ?
        "\n                    <ul class=\"ban-history\">\n                        " + 
          compiled.blocks['history.bans'](helpers, context, guard, iter, helper) + 
          "\n                    </ul>\n                    " :
        "\n                    <div class=\"alert alert-success\">[[user:info.no-ban-history]]</div>\n                    ") + 
      "\n                </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">\n                        [[user:info.mute-history]]\n\n                        " + 
      (guard((context != null) ? context['muted'] : null) ?
        "\n                        " + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n                        <button class=\"btn btn-xs pull-right btn-success\" component=\"account/unmute\">[[user:unmute_account]]</button>\n                        ") + 
          "\n                        " :
        "\n                        " + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n                        <button class=\"btn btn-xs pull-right btn-danger\" component=\"account/mute\">[[user:mute_account]]</button>\n                        ") + 
          "\n                        ") + 
      "\n                    </h3>\n                </div>\n                <div class=\"panel-body\">\n                    " + 
      (guard((context != null && context['history'] != null && context['history']['mutes'] != null) ? context['history']['mutes']['length'] : null) ?
        "\n                    <ul class=\"ban-history\">\n                        " + 
          compiled.blocks['history.mutes'](helpers, context, guard, iter, helper) + 
          "\n                    </ul>\n                    " :
        "\n                    <div class=\"alert alert-success\">[[user:info.no-mute-history]]</div>\n                    ") + 
      "\n                </div>\n            </div>\n\n            " + 
      (guard((context != null) ? context['isAdminOrGlobalModerator'] : null) ?
        "\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">[[user:info.moderation-note]]</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <textarea component=\"account/moderation-note\" class=\"form-control\"></textarea>\n                    <br/>\n                    <button class=\"btn btn-sm pull-right btn-success\" component=\"account/save-moderation-note\">[[user:info.moderation-note.add]]</button>\n                    <br/>\n                    <div component=\"account/moderation-note/list\">\n                        " + 
          compiled.blocks['moderationNotes'](helpers, context, guard, iter, helper) + 
          "\n                    </div>\n                    <div component=\"pagination\" class=\"text-center pagination-container" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\n    <ul class=\"pagination hidden-xs\">\n        <li class=\"previous pull-left" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        " + 
          compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
          "\n\n        <li class=\"next pull-right" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n    </ul>\n\n    <ul class=\"pagination hidden-sm hidden-md hidden-lg\">\n        <li class=\"first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n        </li>\n\n        <li class=\"previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        <li component=\"pagination/select-page\" class=\"page select-page\">\n            <a href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n        </li>\n\n        <li class=\"next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n\n        <li class=\"last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>\n                </div>\n            </div>\n            " :
        "") + 
      "\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\n        <meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n        " + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n            <span itemprop=\"name\">\n                " + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n                " + 
          (index === length - 1 ?
            "\n                " + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n                " + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n                " :
            "") + 
          "\n            </span>\n        " + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    " + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n    ";
      }, function alt() {
        return "";
      });
    },
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        " + 
          (index === 0 ?
            "\n        <li role=\"separator\" class=\"divider\"></li>\n        " :
            "") + 
          "\n        <li id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\" class=\"plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          "\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\">" + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null) ?
            "<i class=\"fa fa-fw " + 
              __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</a></li>\n        ";
      }, function alt() {
        return "";
      });
    },
    'sessions': function sessions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sessions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <li class=\"list-group-item\" data-uuid=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['uuid'] : null)) + 
          "\">\n                    <div class=\"pull-right\">\n                        " + 
          (guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null) ?
            "\n                        " + 
              (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
                "" :
                "\n                        <button class=\"btn btn-xs btn-default\" type=\"button\" data-action=\"revokeSession\">Revoke Session</button>\n                        ") + 
              "\n                        " :
            "") + 
          "\n                        " + 
          __escape(helper(context, helpers, 'userAgentIcons', [guard(value)])) + 
          "\n                        <i class=\"fa fa-circle text-" + 
          (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
            "success" :
            "muted") + 
          "\"></i>\n                    </div>\n                    " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['browser'] : null)) + 
          " " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['version'] : null)) + 
          " on " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['platform'] : null)) + 
          "<br />\n                    <small class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['datetimeISO'] : null)) + 
          "\"></small>\n                    <ul>\n                        <li><strong>[[global:ip_address]]</strong>: " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['ip'] : null)) + 
          "</li>\n                    </ul>\n                </li>\n                ";
      }, function alt() {
        return "";
      });
    },
    'ips': function ips(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['ips'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <li>" + 
          __escape(guard(value)) + 
          "</li>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'usernames': function usernames(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['usernames'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <li class=\"list-group-item\">\n                            " + 
          __escape(guard((context != null && context['usernames'] != null && context['usernames'][key0] != null) ? context['usernames'][key0]['value'] : null)) + 
          "\n                            <small class=\"pull-right\"><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['usernames'] != null && context['usernames'][key0] != null) ? context['usernames'][key0]['timestampISO'] : null)) + 
          "\"></span></small>\n                        </li>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'emails': function emails(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['emails'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <li class=\"list-group-item\">\n                            " + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['value'] : null)) + 
          "\n                            <small class=\"pull-right\"><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['timestampISO'] : null)) + 
          "\"></span></small>\n                        </li>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'history.flags': function historyflags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['history'] != null) ? context['history']['flags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <li>\n                            <p>\n                                " + 
          (guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['targetPurged'] : null) ?
            "\n                                <div>[[flags:target-purged]]</div>\n                                " :
            "\n                                <a class=\"title\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/post/" + 
              __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['pid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['title'] : null)) + 
              "</a><br />\n                                ") + 
          "\n                                <span class=\"timestamp\">[[flags:flagged-timeago-readable, " + 
          __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['timestampISO'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['timestampReadable'] : null)) + 
          "]]</span>\n                            </p>\n                        </li>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'history.bans': function historybans(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['history'] != null) ? context['history']['bans'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <li>\n                            <p>\n                                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n                                <strong>\n                                    <a href=\"" + 
          (guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['username'] : null)) + 
          "</a>\n                                </strong>\n                                <span class=\"timestamp timeago\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['timestampISO'] : null)) + 
          "\"></span> &mdash; " + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['timestampReadable'] : null)) + 
          "<br />\n                                " + 
          (guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['until'] : null) ?
            "\n                                <span class=\"expiry\">[[user:info.banned-until, " + 
              __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['untilReadable'] : null)) + 
              "]]</span><br />\n                                " :
            "\n                                <span class=\"expiry\">[[user:info.banned-permanently]]</span><br />\n                                ") + 
          "\n                                <span class=\"reason\"><strong>[[user:info.banned-reason-label]]</strong>: " + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['reason'] : null)) + 
          "</span>\n                            </p>\n                        </li>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'history.mutes': function historymutes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['history'] != null) ? context['history']['mutes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <li>\n                            <p>\n                                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n                                <strong>\n                                    <a href=\"" + 
          (guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['username'] : null)) + 
          "</a>\n                                </strong>\n                                <span class=\"timestamp timeago\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['timestampISO'] : null)) + 
          "\"></span> &mdash; " + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['timestampReadable'] : null)) + 
          "<br />\n                                " + 
          (guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['until'] : null) ?
            "\n                                <span class=\"expiry\">[[user:info.muted-until, " + 
              __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['untilReadable'] : null)) + 
              "]]</span><br />\n                                " :
            "") + 
          "\n\n                                <span class=\"reason\"><strong>[[user:info.banned-reason-label]]</strong>: " + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['reason'] : null)) + 
          "</span>\n                            </p>\n                        </li>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'moderationNotes': function moderationNotes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['moderationNotes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <hr/>\n\n                        <div class=\"clearfix\">\n                            <div class=\"pull-left\">\n                                <a href=\"" + 
          (guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n                                <strong>\n                                    <a href=\"" + 
          (guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['username'] : null)) + 
          "</a>\n                                </strong>\n\n                                <div class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\n                                    <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['timestampISO'] : null)) + 
          "\"></span>\n                                </div>\n                                <br />\n\n                                <div class=\"content\">\n                                    " + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['note'] : null)) + 
          "\n                                </div>\n                            </div>\n                        </div>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            " + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n            <li component=\"pagination/select-page\" class=\"page select-page\">\n                <a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n            </li>\n            " :
            "\n            <li class=\"page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n                <a href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n            </li>\n            ") + 
          "\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})