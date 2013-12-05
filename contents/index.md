---
title: Quick Send
template: page.jade
icon: coffee
---



<form class="ink-form" ng-controller="quick-send" ng-change="premature-p()">
    <fieldset>
        <div class="control-group">
            <div class="control-group large-80 push-center">
            <span class="control large-35">
                <p>{{user}}@medextra.com</p>
            </span>
            <span class="large-10 push-center">
            <span class="icon-long-arrow-right"></span>
            </span>
            <span class="control large-35 push-right">
              <input id="message-recipient" type="email" placeholder="someone@somewhere.com" ng-model="message.recipient" >
            </span>
            </div>
            <div class="control large-80 push-center vertical-space">
              <textarea id="message-text" ng-model="message.text" required></textarea>
            </div>
            <div class="control-group large-80 push-center">
              <div class="control-group large-40 push-left">
                <div class="control">
                    <input id="file-data" type="file" accept="*" ng-model="file.data" required/>
                </div>
                <div class="control prepend-button">
                  <button class="ink-button" ng-click='pwgen()'><i class="icon-gear"></i>&nbsp;<i class="icon-key"></i></button>
                  <span><input id="file-password" type="text" ng-model="file.password" required></span>
                </div>
              </div>
              <div class="control large-40 push-right vertical-space">
                <button id="send" class="ink-button green push-right" ng-click="send()" ng-disabled="premature" disabled><i class="icon-coffee"></i>&nbsp;Quick Send</button>
              </div>
            </div>
        </div>
    </fieldset>
</form>
