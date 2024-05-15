export const heroRankedInfo = {
  onTable: document.querySelector('.heroRanked'),
  closeBtn: document.getElementById('closeRanked'),

  open() {
    heroRankedInfo.onTable.classList.add('open')
  },
  close() {
    heroRankedInfo.onTable.classList.remove('open')
  }
}

heroRankedInfo.closeBtn.onclick = () => {
  heroRankedInfo.close()
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    heroRankedInfo.close()
  }
})
