import { AnimatePresence, motion as Motion } from 'framer-motion'

function normalizeImages(images) {
  return images.map((image, index) =>
    typeof image === 'string'
      ? { src: image, caption: `Demo screenshot ${index + 1}` }
      : {
          src: image.src,
          caption: image.caption ?? `Demo screenshot ${index + 1}`,
        },
  )
}

export function ProjectDemoModal({
  project,
  activeIndex,
  onClose,
  onNext,
  onPrevious,
  onSelect,
}) {
  if (!project) {
    return null
  }

  const images = normalizeImages(project.images)
  const activeImage = images[activeIndex]

  return (
    <AnimatePresence>
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/82 p-4 backdrop-blur-xl"
        onClick={onClose}
      >
        <Motion.div
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 22, scale: 0.96 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative max-h-[min(92vh,980px)] w-full max-w-5xl overflow-y-auto overflow-x-hidden p-4 shadow-[0_36px_120px_rgba(15,23,42,0.72)] sm:p-6"
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-demo-title"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
            aria-label="Close demo"
          >
            Close
          </button>

          <div className="mb-6 pr-20">
            <p className="section-label">Project Demo</p>
            <h3 id="project-demo-title" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{project.description}</p>
          </div>

          {images.length ? (
            <>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/90">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_45%)]" />
                <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3 sm:pl-5">
                  <button
                    type="button"
                    onClick={onPrevious}
                    className="carousel-button"
                    aria-label="Previous screenshot"
                  >
                    {'<'}
                  </button>
                </div>

                <div className="group relative mx-auto overflow-hidden">
                  <img
                    src={activeImage.src}
                    alt={`${project.title} screenshot ${activeIndex + 1}`}
                    className="demo-image mx-auto h-[20rem] w-full object-contain sm:h-[28rem] lg:h-[34rem]"
                  />
                </div>

                <div className="absolute inset-y-0 right-0 z-10 flex items-center pr-3 sm:pr-5">
                  <button
                    type="button"
                    onClick={onNext}
                    className="carousel-button"
                    aria-label="Next screenshot"
                  >
                    {'>'}
                  </button>
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{activeImage.caption}</p>

              {images.length > 1 ? (
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => onSelect(index)}
                      className={`thumbnail-button ${index === activeIndex ? 'thumbnail-button-active' : ''}`}
                      aria-label={`View screenshot ${index + 1}`}
                    >
                      <img
                        src={image.src}
                        alt=""
                        className="h-16 w-24 rounded-xl object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </>
          ) : null}

          <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 backdrop-blur-md">
              <p className="text-xs tracking-[0.3em] text-slate-500 uppercase">Key impact</p>
              <p className="mt-4 text-base leading-8 text-white">{project.impact}</p>
              {project.note ? (
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.note}</p>
              ) : null}
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 backdrop-blur-md">
              <p className="text-xs tracking-[0.3em] text-slate-500 uppercase">Highlights</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </AnimatePresence>
  )
}
