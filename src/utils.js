import { writable } from 'svelte/store'

// ######## isVisible store, viewportObserver #########

export const isVisible = writable(false)

export const viewportObserver = node => {
  const observerOptions = {
    root: null,
    threshold: 0.5,
  }

  const observerCallback = ([entry]) =>
    entry.isIntersecting ? isVisible.set(true) : isVisible.set(false)

  const observer = new window.IntersectionObserver(observerCallback, observerOptions)

  observer.observe(node)

  return {
    destroy() {
      observer.unobserve(node)
    },
  }
}

// ######## data store, getData #########

export const data = writable([])

export const getData = (node, params) => {
  fetch(params.base + '?category=' + params.category)
    .then(res => res.json())
    .then(_data => data.set(_data.posts))
    .catch(error => console.error(error))
}

// ######## index store #########

export const index = writable(0)
