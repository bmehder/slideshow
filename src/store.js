import { writable } from 'svelte/store'

export const index = writable(0)

export const data = writable([])

export const isVisible = writable(false)

const observerOptions = {
  root: null,
  threshold: 0.5,
}

const observerCallback = ([entry]) =>
  entry.isIntersecting ? isVisible.set(true) : isVisible.set(false)

const observer = new window.IntersectionObserver(observerCallback, observerOptions)

export const viewportObserver = node => {
  observer.observe(node)

  return {
    destroy() {
      observer.unobserve(node)
    },
  }
}

const BASE = 'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/'

export const getData = (node, params) =>
  fetch(BASE + '?category=' + params)
    .then(res => res.json())
    .then(_data => data.set(_data.posts))
    .catch(error => console.error(error))
