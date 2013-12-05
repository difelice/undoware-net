---
title: Quick Send
template: page.jade
icon: coffee
---



<form class="ink-form" ng-controller="quick-send">
    <fieldset>
        <div class="control-group">
            <div class="control large-35">
                <p>{{user}}@medextra.com</p>
            </div>
            <div class="large-5">
            <span class="icon-long-arrow-right">
            </div>
            <div class="control large-40 vertical-space">
              <input id="message-recipient" type="email" placeholder="someone@somewhere.com" ng-model="message.recipient" required>
            </div>
            <div class="control large-80 push-center vertical-space">
              <textarea id="message-text" ng-model="message.text"></textarea>
            </div>
            <div class="control-group large-80 push-center">
              <div class="control-group large-40 push-left">
                <div class="control">
                    <input id="file-data" type="file" accept="*" ng-model="file.data" />
                </div>
                <div class="control">
                  <input id="file-password" type="password" ng-model="file.password" >
                </div>
              </div>
              <div class="control large-40 push-right vertical-space">
                <button id="send" class="ink-button red push-right" ng-click="send()"><i class="icon-coffee"></i>&nbsp;Quick Send</button>
              </div>
            </div>
        </div>
    </fieldset>
</form>
