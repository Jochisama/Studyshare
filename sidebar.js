/* ═══════════════════════════════════════════════════
   sidebar.js — StudyShare M1 ST
   Ce fichier est chargé après index.html
   Les fonctions openSidebar/closeSidebar sont déjà
   définies dans index.html — ce fichier peut servir
   pour ajouter des extensions futures.
═══════════════════════════════════════════════════ */

// Fermer la sidebar avec la touche Escape
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    if(typeof closeSidebar === 'function') closeSidebar();
    if(typeof closePdfViewer === 'function') closePdfViewer();
    if(typeof closeModuleChanger === 'function') closeModuleChanger();
  }
});

// Swipe gauche pour fermer la sidebar (mobile)
(function(){
  let startX = 0;
  const drawer = document.getElementById('sidebar-drawer');
  if(!drawer) return;
  drawer.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, {passive:true});
  drawer.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if(dx < -60) closeSidebar();
  }, {passive:true});
})();
