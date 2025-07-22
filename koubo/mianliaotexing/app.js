// 面料数据
const fabricsData = [
    {"name": "丝绸", "drape": 5, "elasticity": 1, "stiffness": 1, "silhouettes": ["A型", "X型"], "characteristics": "飘逸流动、贴身优雅"},
    {"name": "雪纺", "drape": 5, "elasticity": 1, "stiffness": 1, "silhouettes": ["A型", "H型"], "characteristics": "轻盈飘逸、动感强"},
    {"name": "欧根纱", "drape": 3, "elasticity": 1, "stiffness": 3, "silhouettes": ["H型", "O型"], "characteristics": "立体蓬松、层次分明"},
    {"name": "棉质", "drape": 3, "elasticity": 1, "stiffness": 3, "silhouettes": ["H型", "A型"], "characteristics": "自然舒适、线条清晰"},
    {"name": "亚麻", "drape": 2, "elasticity": 1, "stiffness": 3, "silhouettes": ["H型", "T型"], "characteristics": "挺括有型、结构感强"},
    {"name": "毛呢", "drape": 2, "elasticity": 3, "stiffness": 4, "silhouettes": ["H型", "X型"], "characteristics": "轮廓清晰、正式挺拔"},
    {"name": "涤纶", "drape": 3, "elasticity": 3, "stiffness": 3, "silhouettes": ["A型", "H型"], "characteristics": "平整光滑、现代简约"},
    {"name": "针织", "drape": 4, "elasticity": 4, "stiffness": 1, "silhouettes": ["X型", "O型"], "characteristics": "舒适贴身、弹性自如"},
    {"name": "莱卡", "drape": 4, "elasticity": 5, "stiffness": 1, "silhouettes": ["X型", "A型"], "characteristics": "紧身塑形、运动感强"},
    {"name": "牛仔布", "drape": 1, "elasticity": 1, "stiffness": 4, "silhouettes": ["H型", "A型"], "characteristics": "结构化、硬朗风格"},
    {"name": "皮革", "drape": 0, "elasticity": 0, "stiffness": 5, "silhouettes": ["H型", "T型"], "characteristics": "立体挺括、强烈个性"},
    {"name": "真丝缎", "drape": 4, "elasticity": 1, "stiffness": 1, "silhouettes": ["A型", "X型"], "characteristics": "光泽华丽、垂感优美"},
    {"name": "纱网", "drape": 5, "elasticity": 1, "stiffness": 1, "silhouettes": ["A型", "O型"], "characteristics": "透明轻盈、浪漫飘逸"},
    {"name": "厚呢绒", "drape": 1, "elasticity": 1, "stiffness": 4, "silhouettes": ["H型", "X型"], "characteristics": "厚重稳定、庄重大气"},
    {"name": "薄纱", "drape": 5, "elasticity": 1, "stiffness": 1, "silhouettes": ["A型", "O型"], "characteristics": "梦幻柔美、仙气飘飘"}
];

// 廓形数据
const silhouettesData = [
    {"type": "A型", "description": "上窄下宽，优雅飘逸，适合展现女性柔美", "characteristics": "从肩部向下逐渐展开，如梯形状，能够很好地修饰身形"},
    {"type": "H型", "description": "直筒型，简约现代，适合休闲和职业装", "characteristics": "上下等宽，线条简洁，给人干练利落的感觉"},
    {"type": "X型", "description": "收腰设计，凸显身材曲线", "characteristics": "强调胸部和臀部，收紧腰部，展现女性S曲线"},
    {"type": "O型", "description": "宽松圆润，舒适随性", "characteristics": "整体呈椭圆形，宽松舒适，适合孕妇装和休闲装"},
    {"type": "T型", "description": "上宽下窄，个性张扬", "characteristics": "肩部宽大，下摆收紧，适合展现强烈的设计感"}
];

// 当前选中的面料
let currentFabric = null;

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing application...');
    initializeApplication();
});

// 初始化应用程序
function initializeApplication() {
    try {
        // 获取DOM元素
        const fabricSelect = document.getElementById('fabricSelect');
        const fabricInfo = document.getElementById('fabricInfo');
        const silhouetteItems = document.querySelectorAll('.silhouette-item');
        const silhouetteDetails = document.getElementById('silhouetteDetails');
        const designAdvice = document.getElementById('designAdvice');

        // 检查关键元素是否存在
        if (!fabricSelect || !fabricInfo || !silhouetteDetails || !designAdvice) {
            console.error('Critical DOM elements not found');
            return;
        }

        console.log('All DOM elements found, setting up event listeners...');

        // 设置面料选择器事件
        fabricSelect.addEventListener('change', function(event) {
            console.log('Fabric selection changed:', event.target.value);
            handleFabricSelection(event.target.value);
        });

        // 设置廓形点击事件
        silhouetteItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                const silhouetteType = this.getAttribute('data-type');
                console.log('Silhouette clicked:', silhouetteType);
                handleSilhouetteClick(silhouetteType);
            });
        });

        console.log('Application initialized successfully');
        
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}

// 处理面料选择
function handleFabricSelection(fabricName) {
    try {
        const fabricInfo = document.getElementById('fabricInfo');
        const designAdvice = document.getElementById('designAdvice');

        if (!fabricName) {
            // 重置为初始状态
            fabricInfo.classList.remove('active');
            resetFabricInfo();
            updateDesignAdvice(null);
            currentFabric = null;
            return;
        }

        // 查找选中的面料
        currentFabric = fabricsData.find(fabric => fabric.name === fabricName);
        
        if (currentFabric) {
            console.log('Found fabric:', currentFabric);
            displayFabricInfo(currentFabric);
            updateDesignAdvice(currentFabric);
        } else {
            console.error('Fabric not found:', fabricName);
        }
    } catch (error) {
        console.error('Error handling fabric selection:', error);
    }
}

// 显示面料信息
function displayFabricInfo(fabric) {
    try {
        const fabricInfo = document.getElementById('fabricInfo');
        const drapeBar = document.getElementById('drapeBar');
        const elasticityBar = document.getElementById('elasticityBar');
        const stiffnessBar = document.getElementById('stiffnessBar');
        const drapeValue = document.getElementById('drapeValue');
        const elasticityValue = document.getElementById('elasticityValue');
        const stiffnessValue = document.getElementById('stiffnessValue');
        const suitableSilhouettes = document.getElementById('suitableSilhouettes');
        const fabricCharacteristics = document.getElementById('fabricCharacteristics');

        if (!drapeBar || !elasticityBar || !stiffnessBar) {
            console.error('Property bar elements not found');
            return;
        }

        // 激活面料信息区域
        fabricInfo.classList.add('active');

        // 更新属性条（延迟执行以确保动画效果）
        setTimeout(() => {
            updatePropertyBar(drapeBar, drapeValue, fabric.drape);
            updatePropertyBar(elasticityBar, elasticityValue, fabric.elasticity);
            updatePropertyBar(stiffnessBar, stiffnessValue, fabric.stiffness);
        }, 100);

        // 更新适合的廓形标签
        updateSuitableSilhouettes(fabric.silhouettes);

        // 更新造型特点
        if (fabricCharacteristics) {
            fabricCharacteristics.textContent = fabric.characteristics;
        }

        console.log('Fabric info displayed successfully');
    } catch (error) {
        console.error('Error displaying fabric info:', error);
    }
}

// 重置面料信息
function resetFabricInfo() {
    const drapeBar = document.getElementById('drapeBar');
    const elasticityBar = document.getElementById('elasticityBar');
    const stiffnessBar = document.getElementById('stiffnessBar');
    const drapeValue = document.getElementById('drapeValue');
    const elasticityValue = document.getElementById('elasticityValue');
    const stiffnessValue = document.getElementById('stiffnessValue');
    const suitableSilhouettes = document.getElementById('suitableSilhouettes');
    const fabricCharacteristics = document.getElementById('fabricCharacteristics');

    if (drapeBar) drapeBar.style.width = '0%';
    if (elasticityBar) elasticityBar.style.width = '0%';
    if (stiffnessBar) stiffnessBar.style.width = '0%';
    if (drapeValue) drapeValue.textContent = '0';
    if (elasticityValue) elasticityValue.textContent = '0';
    if (stiffnessValue) stiffnessValue.textContent = '0';
    if (suitableSilhouettes) suitableSilhouettes.innerHTML = '';
    if (fabricCharacteristics) fabricCharacteristics.textContent = '选择面料查看特点...';
}

// 更新属性条
function updatePropertyBar(barElement, valueElement, value) {
    try {
        if (!barElement || !valueElement) {
            console.error('Property bar elements missing');
            return;
        }

        const percentage = Math.max(0, Math.min(100, (value / 5) * 100));
        
        barElement.style.width = `${percentage}%`;
        valueElement.textContent = value;
        
        console.log(`Property bar updated: ${percentage}%, value: ${value}`);
    } catch (error) {
        console.error('Error updating property bar:', error);
    }
}

// 更新适合的廓形标签
function updateSuitableSilhouettes(silhouettes) {
    try {
        const suitableSilhouettes = document.getElementById('suitableSilhouettes');
        if (!suitableSilhouettes) {
            console.error('Suitable silhouettes element not found');
            return;
        }

        suitableSilhouettes.innerHTML = '';
        
        silhouettes.forEach((silhouette, index) => {
            const tag = document.createElement('span');
            tag.className = 'silhouette-tag';
            tag.textContent = silhouette;
            
            // 延迟添加以创建动画效果
            setTimeout(() => {
                suitableSilhouettes.appendChild(tag);
            }, index * 100);
        });

        console.log('Silhouette tags updated:', silhouettes);
    } catch (error) {
        console.error('Error updating silhouette tags:', error);
    }
}

// 处理廓形点击
function handleSilhouetteClick(silhouetteType) {
    try {
        const silhouetteData = silhouettesData.find(s => s.type === silhouetteType);
        
        if (silhouetteData) {
            console.log('Found silhouette data:', silhouetteData);
            displaySilhouetteDetails(silhouetteData);
            
            // 更新活动状态
            updateActiveSilhouette(silhouetteType);
        } else {
            console.error('Silhouette data not found:', silhouetteType);
        }
    } catch (error) {
        console.error('Error handling silhouette click:', error);
    }
}

// 更新活动廓形状态
function updateActiveSilhouette(activeType) {
    const silhouetteItems = document.querySelectorAll('.silhouette-item');
    silhouetteItems.forEach(item => {
        if (item.getAttribute('data-type') === activeType) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// 显示廓形详情
function displaySilhouetteDetails(silhouette) {
    try {
        const silhouetteDetails = document.getElementById('silhouetteDetails');
        const detailsTitle = document.getElementById('detailsTitle');
        const detailsDescription = document.getElementById('detailsDescription');
        
        if (!detailsTitle || !detailsDescription) {
            console.error('Silhouette details elements not found');
            return;
        }

        // 更新内容
        detailsTitle.textContent = `${silhouette.type} - ${silhouette.description}`;
        detailsDescription.textContent = silhouette.characteristics;

        // 找到适合这个廓形的面料
        const suitableFabricsForSilhouette = fabricsData.filter(fabric => 
            fabric.silhouettes.includes(silhouette.type)
        );

        updateSuitableFabricsList(suitableFabricsForSilhouette);
        
        // 激活详情面板
        silhouetteDetails.classList.add('active');

        console.log('Silhouette details displayed successfully');
        
        // 平滑滚动到详情区域
        setTimeout(() => {
            silhouetteDetails.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
        
    } catch (error) {
        console.error('Error displaying silhouette details:', error);
    }
}

// 更新适合的面料列表
function updateSuitableFabricsList(fabrics) {
    try {
        const suitableFabrics = document.getElementById('suitableFabrics');
        if (!suitableFabrics) {
            console.error('Suitable fabrics element not found');
            return;
        }

        suitableFabrics.innerHTML = '';
        
        fabrics.forEach((fabric, index) => {
            const tag = document.createElement('span');
            tag.className = 'fabric-tag';
            tag.textContent = fabric.name;
            
            // 延迟添加以创建动画效果
            setTimeout(() => {
                suitableFabrics.appendChild(tag);
            }, index * 50);
        });

        console.log('Suitable fabrics list updated:', fabrics.map(f => f.name));
    } catch (error) {
        console.error('Error updating suitable fabrics list:', error);
    }
}

// 更新设计建议
function updateDesignAdvice(fabric) {
    try {
        const designAdvice = document.getElementById('designAdvice');
        if (!designAdvice) {
            console.error('Design advice element not found');
            return;
        }

        if (!fabric) {
            designAdvice.innerHTML = '<p>选择一种面料，获取专属的设计建议...</p>';
            designAdvice.classList.remove('active');
            return;
        }

        const advice = generateDesignAdvice(fabric);
        designAdvice.innerHTML = advice;
        designAdvice.classList.add('active');
        
        console.log('Design advice updated for fabric:', fabric.name);
    } catch (error) {
        console.error('Error updating design advice:', error);
    }
}

// 生成设计建议
function generateDesignAdvice(fabric) {
    try {
        let advice = `<div class="advice-section">
            <h4>📏 基于${fabric.name}的设计建议</h4>
            <p>${getStyleAdvice(fabric)}</p>
        </div>`;
        
        advice += `<div class="advice-section">
            <h4>🎨 颜色搭配建议</h4>
            <p>${getColorAdvice(fabric)}</p>
        </div>`;
        
        advice += `<div class="advice-section">
            <h4>🏛️ 适用场合</h4>
            <p>${getOccasionAdvice(fabric)}</p>
        </div>`;
        
        advice += `<div class="advice-section">
            <h4>✨ 造型技巧</h4>
            <p>${getStylingTips(fabric)}</p>
        </div>`;
        
        return advice;
    } catch (error) {
        console.error('Error generating design advice:', error);
        return '<p>设计建议生成出错，请重试。</p>';
    }
}

// 获取风格建议
function getStyleAdvice(fabric) {
    const { drape, elasticity, stiffness } = fabric;
    
    if (drape >= 4) {
        return "利用面料的优美悬垂性，设计流动性强的廓形，避免过多的结构化设计，让面料的自然美感得到充分展现。";
    } else if (stiffness >= 4) {
        return "充分利用面料的挺括特性，可以设计立体感强的廓形，采用几何化的裁剪线条，创造现代感的结构美。";
    } else if (elasticity >= 4) {
        return "发挥面料的弹性优势，设计贴身合体的廓形，强调身体曲线，适合运动装或紧身款式的设计。";
    } else {
        return "平衡面料的各项特性，设计简洁大方的廓形，注重比例和线条的协调，营造优雅的整体效果。";
    }
}

// 获取颜色建议
function getColorAdvice(fabric) {
    const fabricColorMap = {
        '丝绸': '选择深色或珠光色彩，突出丝绸的光泽感；避免过于鲜艳的色彩',
        '雪纺': '适合淡雅的色彩，如粉色、浅蓝、米白等，营造轻盈感',
        '欧根纱': '选择明亮或金属色彩，突出面料的立体质感',
        '棉质': '适合自然色系，如米白、卡其、海军蓝等经典色彩',
        '亚麻': '选择大地色调，如亚麻色、橄榄绿、土褐色等',
        '毛呢': '选择沉稳的色彩，如深蓝、灰色、驼色等商务色彩',
        '涤纶': '适合现代感色彩，如纯白、极简灰、科技蓝等',
        '针织': '适合温暖的色调，如焦糖色、深灰、酒红等',
        '莱卡': '选择运动感色彩，如荧光色、撞色搭配等',
        '牛仔布': '经典的靛蓝色，或尝试黑色、白色牛仔',
        '皮革': '选择经典的黑色、棕色或大胆的金属色彩',
        '真丝缎': '适合华贵色彩，如深红、宝石蓝、香槟金等',
        '纱网': '选择梦幻色彩，如粉色、薄荷绿、珍珠白等',
        '厚呢绒': '选择庄重色彩，如深灰、藏蓝、酒红等',
        '薄纱': '适合仙气色彩，如浅粉、天蓝、象牙白等'
    };
    
    return fabricColorMap[fabric.name] || '根据面料特性选择合适的色彩，注意与面料质感的协调性';
}

// 获取场合建议
function getOccasionAdvice(fabric) {
    const { drape, elasticity, stiffness } = fabric;
    
    if (stiffness >= 4) {
        return "适合正式场合、商务会议、晚宴等需要展现专业形象的场所";
    } else if (drape >= 4) {
        return "适合晚宴、约会、艺术活动等需要展现优雅气质的场合";
    } else if (elasticity >= 4) {
        return "适合休闲、运动、日常生活等需要舒适活动的场合";
    } else {
        return "多功能面料，适合多种场合，从日常到半正式场合都可搭配";
    }
}

// 获取造型技巧
function getStylingTips(fabric) {
    const tips = [];
    
    if (fabric.drape >= 4) {
        tips.push("采用垂直线条增强流动感");
        tips.push("避免过多装饰细节");
        tips.push("利用层次穿搭营造丰富感");
    }
    
    if (fabric.elasticity >= 4) {
        tips.push("选择合适的内衣搭配");
        tips.push("注意服装尺寸的精确性");
        tips.push("可尝试撞色或拼接设计");
    }
    
    if (fabric.stiffness >= 4) {
        tips.push("重视服装版型的精准度");
        tips.push("可加入几何元素设计");
        tips.push("配饰要简洁有力");
    }
    
    if (tips.length === 0) {
        tips.push("注重整体搭配的和谐性");
        tips.push("选择合适的配饰点缀");
        tips.push("根据个人风格调整细节");
    }
    
    return tips.join('；') + '。';
}