# Performance Audit

I'm using NPM as a build tool and Browserify for optimization.

**First state**

Tested on: ``Regular 2G(300ms, 250kb/s, 50kb/s)``

Without caching...

**Before:**

- many requests
- big blocking scripts
- no critical css
- blocking css

``Load: 17.11s``


![alt text](readme_images/1.png)

**Page Insights**

![alt text](readme_images/ps1.png)

## Compression & Eliminating render-blocking CSS & adding Browserify

**After:**

- bundled javascript files
- added critical css
- load javascript async
- added Gzip compression

Results:

```Load: 1.14s```

![alt text](readme_images/2.png)

**Page Insights**

![alt text](readme_images/ps2.png)

### Service worker - Caching

```Load: 138ms```

After adding service worker (using caching).

![alt text](readme_images/caching.png)

![alt text](readme_images/ps3.png)

### To do: resize images on the server?



