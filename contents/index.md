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
                  <input id="text-input" type="email" placeholder="someone@somewhere.com" ng-model="sender">
                </span>
                <span class="large-40">@medextra.com</span>
            </div>
            <div class="control large-80 push-center">
                <input id="text-input" type="email" placeholder="someone@somewhere.com" ng-model="sender">
            </div>
        </div>
    </fieldset>
</form>
