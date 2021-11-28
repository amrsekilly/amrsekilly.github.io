---
title: Sending asynchronous requests after leaving a page
author: Amr Elsekilly
date: 2021-11-28
hero: ./images/sending-requests-unload.png
excerpt: Most of us must have struggled in the past with sending asynchronous requests when a user decides to leave a page. Whether you're trying to send analytics data or sending a small application-specific data to the backend when the user decides to leave your page
---

# Introduction

Most of us must have struggled in the past with sending asynchronous requests when a user decides to leave a page. Whether you're trying to send analytics data or sending a small application-specific data to the backend when the user decides to leave your page.

Most probably you've faced this unreliability. And tried to find workarounds to overcome this reliability which could have caused a bad UX as a result.

In this article we'll be going through these browser limitations, and how to address them in order to send asynchronous requests properly when the user tries to leave your page.

# How can we detect that a user has left our page?

There are a couple of APIs and events that the browser gives us to detect that a user has left our page. In the next section we'll go through them and discuss their limitations and where to use each of them.

## The `pagehide`, `beforeunload`, and `unload` events

You can read more about them on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event), and in this great [google developers article](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#events).

The problem with using them is that they're very unreliable and unpredictable. That's why it's always better to rely on [the browser's visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API).

## The Browser's Visibility API

The Browser/Page Visibility API allows us to detect if a page is visible or hidden, thus can know when a user leaves your page.

Usually, leaving a page doesn't just mean that a user has closed the tab. If we're talking about opening the page on a mobile browser, using the visibility API will allow us to detect if the user switches to a different mobile app which means that they're done using our page or when they decide to close the browser using the phone's app manager. We can't do that using `unload` and `beforeunload`.


> Nice, now that we know how to detect the event of the user leaving the page. How will we send a request to our backend?


# How to send data to the backend when a user leaves a page

When we're sending HTTP requests to our backend, we usually send asynchronous `XMLHttpRequest` requests.

The problem with that, is that if the browser is trying to unload your page or if the tab is hidden/invisible, modern browsers most of the time will decide to not fire any asynchronous XMLHttpRequest requests. Thus, this method could become very unreliable for sending data to our backend, and most of the time it won't work. I struggled with that **A LOT** in the past. You can read more about this in this amazing [MDN article](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon).

# The solution to sending the request reliably

Given the limitations of using `XMLHttpRequest` in the mentioned case, browsers created a method called `sendBeacon()` which fixed this issue.

# The Navigator.sendBeacon() Method

This method allows you to send a small amount of data asynchronously to a RESTful API over HTTP.

The interface for this method looks like this

```javascript
navigator.sendBeacon(URL, data);
```

Where URL is the URL of your RESTful endpoint that should receive the data. And data is the small amount of data that you're trying to send to your backend, whether it's an analytics data or whatever.

You can read more about that method [in this MDN article](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon).

>> Note: Based on my own experience, for more reliability it's better to serialize any data you wanna send and send it as a string.

# The complete solution

When we combine the [visibility change event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event) with the `sendBeacon()` method, we get the following

```javascript
document.addEventListener('visibilitychange', function logData() {
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('https://test-api.com/log-analytics', 'serializedData');
  }
});
```
Here we're listening to the visibility change event, and if the page becomes invisible or the user leaves your page we will send the request using `sendBeacon()` to your RESTful endpoint.

> If you liked the article, please don't forget to subscribe to my mailing list, to get my future articles. Thanks! 🚀🔥

