---
title: Quick Send
template: page.jade
icon: coffee
---



<form class="ink-form" ng-controller="quick-send">
    <fieldset>
        <div class="control-group">
            <div class="control-group large-80 push-center">
                <span class="control large-40">
                  <input id="sender-username" type="email" placeholder="jsmith" ng-model="sender">
                </span>
                <span class="large-40">@medextra.com</span>
            </div>
            <div class="control large-80 push-center">
              <input id="recipient-address" type="email" placeholder="someone@somewhere.com" ng-model="recipient">
            </div>
            <div class="control large-80 push-center">
                <input id="message-attachment" type="file" accept="*" ng-model="message.attachment" />
            </div>
            <div class="control large-80 push-center">
              <textarea id="message-text" ng-model="message.text"></textarea>
            </div>
            <div class="control large-80 push-center">
              <button class="ink-button red" ng-click="send()"><i class="icon-rocket"></i> Send</button>
            </div>

        </div>
    </fieldset>
</form>
